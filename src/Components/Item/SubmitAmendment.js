import React, { useEffect, useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { NFTStorage } from "nft.storage";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import ABI from "../../smartContract_ABI/Abi.json";
import market from "../../smartContract_ABI/market.json";
import AmendmentIcon from "../../Assets/AmendmentIcon.png";
import rightTick from "../../Assets/rightTick.png";
import editPencil from "../../Assets/Pencil.png";
import Loader from "../../Assets/Loader.png";
import ApproveError from "../../Assets/ApproveError.png";
import ApproveSuccess from "../../Assets/ApproveSuccess.png";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const nftClient = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3NzViNDMzQ0Q0NTUwNWJlMDk0N0M1Mzg2YzU0MUNhOUZjOTIwZDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDY5OTAzOTU1NSwibmFtZSI6Ik5GVGkifQ._gUNoDuZ2mNjTuH88y57fJ4dfzScsxhmVamqSrEaxL4",
});
const gasApi =
  "https://api-kovan.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=XQ21J4ZIV1ENAT726RD6I9PM29NADXTFAM";

const nftaddress = "0x956f41dCe063AbaeB0662908A87BeF8EBeeeaC61";
const nftmarketaddress = "0x6A28E640ac5681c41347364592eb9394BD6D29A8";

async function getAccount(data) {
  if (data) {
    // debugger

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    // let TotalAmount = await getBalance(account)

    // if(TotalAmount){
    return account;

    // }
  } else {
    const account = null;
    return account;
  }
}

export default function SubmitAmendment({
  isModalOpen,
  changeModalHeading,
  amendentData,
}) {
  const [isOptimizeGas, setIsOptimizeGas] = useState(false);
  const [gasAmount, setGasAmount] = useState({
    gasAmount: "",
    amendentFee: 0.001,
    TotalPrice: Number,
  });
  const [isSignInWithWallet, setIsSignInWithWallet] = useState(false);
  const [isTransactionApproved, setIsTransactionApproved] = useState(false);
  const [transactionButtonImage, setTransactionButtonImage] =
    useState(rightTick);
  const [transactionButtonText, setTransactionButtonText] =
    useState("Start Now");
  const [transactionButtonClass, setTransactionButtonClass] = useState(
    "approve-transaction-button"
  );
  const [accountAddress, setAccountAddress] = useState("");
  const [mintNftTx, setMintNftTx] = useState("");

  const [loader, setLoader] = useState(false);

  const toggle = () => {
    setIsOptimizeGas(!isOptimizeGas);
    console.log(isOptimizeGas);
  };

  const signInWithWallet = (e) => {
    console.log(amendentData);
    // debugger
    e.preventDefault();
    getAccount("true").then((response) => {
      console.log(response);
      setAccountAddress(response);
      // (response)?props.setAccount(true) : props.setAccount(false)
      setIsSignInWithWallet(false);
      changeModalHeading("Follow Steps");
    });
  };

  useEffect(() => {
    window.scroll(0, 0);

    // return response.result

    gasFunction();
    setIsOptimizeGas(false);
    setIsSignInWithWallet(true);
    setIsTransactionApproved(false);
    setTransactionButtonImage(rightTick);
    setTransactionButtonText("Start Now");
    setTransactionButtonClass("approve-transaction-button");
    changeModalHeading("Submit Amendment");
  }, [isModalOpen]);

  const gasFunction = async () => {
    // debugger
    const gasData = await fetch(gasApi, { method: "GET" });
    let newData = await gasData.json();
    // console.log(newData.result)
    let data1 = parseFloat(
      ethers.utils.formatEther(parseInt(newData.result, 16))
    );
    let data = ethers.utils.formatEther(parseInt(newData.result, 16));
    let TotalData = data1 + gasAmount.amendentFee;
    setGasAmount((prevState) => ({
      ...prevState,
      gasAmount: data,
      TotalPrice: TotalData,
    }));
    // setGasAmount(data)
  };

  async function getExampleImage(e) {
    const imageOriginUrl = e;
    const r = await fetch(imageOriginUrl);
    if (!r.ok) {
      throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
    }
    return r.blob();
  }

  async function approveTransaction(e) {
    // debugger;
    e.preventDefault();
    setLoader(true);
    const image2 = await getExampleImage(amendentData.imageUrl);

    const metadata = await nftClient.store({
      name: amendentData.name,
      description: amendentData.description,
      image: image2,
      files: [image2],
    });
    console.log("NFT MetaData URL is: ", metadata.url);
    console.log("NFT MetaData URL is: ", metadata.data);
    if (metadata.url) {
      mintNft(metadata.url);
    } else {
      setLoader(false);
    }
  }

  const mintNft = async (e) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    console.log("wallet Connect is done");
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftmarketaddress, market, signer);
    let transaction = await contract.mintNFT(amendentData.name, e);
    let tx = await transaction.wait();

    if (tx) {
      setMintNftTx(tx);
      console.log("NFT token creatation is done, Now going to nft market Sell");
      setTimeout(() => {
        setTransactionButtonText("Done");
        setIsTransactionApproved(true);
        setTransactionButtonClass("approve-transaction-button-success");
        setTransactionButtonImage(ApproveSuccess);
        setLoader(false);
        // marketSell(tx);
      }, 2000);
    } else {
      setLoader(false);
      setTimeout(() => {
        setIsTransactionApproved(false);
        setTransactionButtonText("Failed");
        setTransactionButtonClass("approve-transaction-button-fail");
        setTransactionButtonImage(ApproveError);
        setLoader(false);
      }, 2000);
    }
  };

  const marketSell = async () => {
    // debugger
    let event = mintNftTx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();

    const web3Modal = new Web3Modal();

    const price = ethers.utils.parseUnits("0.001", "ether");
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    //sign the transaction
    const signer = provider.getSigner();

    let contract = new ethers.Contract(nftmarketaddress, market, signer);

    //get the listing price
    // let listingPrice = await contract.getListingPrice();
    // listingPrice = listingPrice.toString();
    //  let  listingPrice = '1'

    let transaction = await contract.addNftToMarket(
      // nftaddress,
      tokenId,
      price,
      { value: price, gasLimit: 3000000 }
    );
    if (transaction) {
      console.log("NFT market place also done");
      console.log(transaction, "NFT Market Place");
      // setLoader(false);
    } else {
      // setLoader(false);
    }
  };

  return (
    <>
      {!isSignInWithWallet && (
        <div className="d-flex flex-column amendment-modal-body-container">
          {/* Row */}
          <div className="d-flex amendment-modal-body-row">
            <div className="amendment-modal-body-row-image">
              <img src={AmendmentIcon} alt="Icon" />
            </div>
            <div className="amendment-modal-body-row-details d-flex flex-column">
              <p>Optimize gas</p>
              {isOptimizeGas ? (
                <p>Enable gas/transaction optimization</p>
              ) : (
                <p>Estimated total price: $94.21</p>
              )}
            </div>
            <div>
              <label className="submit-amendment-switch">
                <input
                  onClick={() => {
                    toggle();
                  }}
                  value={isOptimizeGas}
                  type="checkbox"
                />
                <span className="submit-amendment-slider round"></span>
              </label>
            </div>
          </div>

          {/*On Toggle Optimize Gas Details */}
          {isOptimizeGas && (
            <div className="item-optimize-gas-details d-flex flex-column">
              <div className="d-flex justify-content-between">
                <label htmlFor="estimatedTotalPrice">
                  Estimated Total Price
                </label>
                <p id="estimatedTotalPrice">{gasAmount.TotalPrice} ETH</p>
              </div>

              <div className="d-flex justify-content-between pt-3">
                <label htmlFor="amendmentFee">Amendment Fee</label>
                <p id="amendmentFee">{gasAmount.amendentFee} ETH</p>
              </div>

              <div className="d-flex justify-content-between">
                <label htmlFor="totalGasFee">Total Gas Fee</label>
                <p id="totalGasFee">{gasAmount.gasAmount} ETH</p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="amendment-modal-body-btns d-flex flex-column">
            <button
              onClick={signInWithWallet}
              className="amendment-modal-body-submit-btn w-100"
            >
              Sign With Wallet
            </button>
            <button
              data-dismiss="modal"
              className="amendment-modal-body-cancel-btn w-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* After Signed In */}
      {isSignInWithWallet && (
        <div className="d-flex flex-column steps-container">
          <div className="approve-section d-flex flex-column">
            <div className="d-flex approve-section-row w-100">
              <div className="approve-section-row-image">
                {loader ? (
                  <div className="loader"></div>
                ) : (
                  <img src={transactionButtonImage} alt="" />
                )}
              </div>
              <div className="d-flex flex-column approve-section-row-details">
                <p>Approve</p>
                <p>Approve perfoming transactions with your wallet</p>
              </div>
            </div>
            <button
              disabled={isTransactionApproved}
              className={transactionButtonClass}
              onClick={approveTransaction}
            >
              {loader ? (
                <img className="button-loader" src={Loader} />
              ) : (
                transactionButtonText
              )}
            </button>

            {transactionButtonText === "Failed" ? (
              <p className="approve-error-text">
                Something went wrong, please <span>try again</span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="sign-sell-order d-flex flex-column mt-3">
            <div className="d-flex sign-sell-order-row">
              <div className="sign-sell-order-row-image">
                <img src={editPencil} alt="" />
              </div>
              <div className="d-flex flex-column sign-sell-order-row-details">
                <p>Sign Sell Order</p>
                <p>Sign sell order using your wallet</p>
              </div>
            </div>
            <button
              className={
                isTransactionApproved
                  ? "sign-sell-order-start-now-button"
                  : "sign-sell-order-start-now-button-disabled"
              }
              disabled={!isTransactionApproved}
              onClick={marketSell}
            >
              Start now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
