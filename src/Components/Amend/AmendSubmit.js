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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE2Y0MwMTg5MTlBYjI2MjVDNEM2QkViQzI1QjkxNTQ0RDkxMTlmODIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MTQ5ODQ2NDUxNiwibmFtZSI6IlNwZXF0by1ORlRpIn0.nk8je19yyR4zNSBeM1AsK3KcQePtUzdu3wUBjp7ogCE",
});
const gasApi =
  "https://api-kovan.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=XQ21J4ZIV1ENAT726RD6I9PM29NADXTFAM";

//  const nftaddress =  "0x956f41dCe063AbaeB0662908A87BeF8EBeeeaC61";
// const nftmarketaddress = "0x6A28E640ac5681c41347364592eb9394BD6D29A8";
 const nftaddress =  "0x63Adb8734CB67b34b4F0Ae3Ec81ef45Bf55C70Ae";
const nftmarketaddress = "0x4f2a51A02c11fe59CF83aA342665e9302CF726c0";

async function getAccount(data) {
  if (data) {
    // debugger

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;

    // }
  } else {
    const account = null;
    return account;
  }
}

export default function AmendSubmit({ isModalOpen, changeModalHeading, amendentData, data, }) {

  console.log(amendentData);

  const [isOptimizeGas, setIsOptimizeGas] = useState(false);
  const [gasAmount, setGasAmount] = useState({
    gasAmount: "",
    amendentFee: 0.001,
    TotalPrice: Number,
  });
  const [isSignInWithWallet, setIsSignInWithWallet] = useState(false);

  const [isTransactionApproved, setIsTransactionApproved] = useState(false);
  const [isSignSellOrderApproved, setIsSignSellOrderApproved] = useState(false);

  const [transactionButtonImage, setTransactionButtonImage] = useState(rightTick);
  const [signSellOrderImage, setSignSellOrderImage] = useState(editPencil);

  const [transactionButtonText, setTransactionButtonText] = useState("Start Now");
  const [signSellButtonText, setSignSellButtonText] = useState("Start Now");

  const [transactionButtonClass, setTransactionButtonClass] = useState("approve-transaction-button");
  const [signSellButtonClass, setSignSellButtonClass] = useState("sign-sell-order-start-now-button-disabled");

  const [accountAddress, setAccountAddress] = useState("");
  const [mintNftTx, setMintNftTx] = useState("");

  const [loader, setLoader] = useState(false);
  const [signSellLoader, setSignSellLoader] = useState(false);

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
    // debugger;
    window.scroll(0, 0);
    console.log(data);

    // return response.result

    gasFunction();
    setIsOptimizeGas(false);
    setIsSignInWithWallet(true);
    setIsTransactionApproved(false);
    setTransactionButtonImage(rightTick);
    // setTransactionButtonText("Start Now");
    // setTransactionButtonClass("approve-transaction-button");
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
    debugger
    e.preventDefault();
    setLoader(true);
    const image2 = await getExampleImage(data.image);
    data.fileName.name = amendentData.name

    const metadata = await nftClient.store({
      name: amendentData.name,
      description: data.description,
      image: image2,
      songData: data.songData,
      fileName: data.fileName,
      files: [data.files],
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
    let contract = new ethers.Contract(nftaddress, ABI, signer);

    // let transaction = await contract.mintNFT(data.fileName.name, e);
    setMintNftTx(e);
    // if(transaction){

    // if (transaction) {
    console.log("NFT token creatation is done, Now going to nft market Sell");
    setMintNftTx(e);
    setTransactionButtonText("Done");
    setIsTransactionApproved(true);
    setTransactionButtonClass("approve-transaction-button-success");
    setTransactionButtonImage(ApproveSuccess);
    setLoader(false);
    setIsSignSellOrderApproved(true);
    setSignSellButtonClass("sign-sell-order-start-now-button");
    // }
  };

  const marketSell = async () => {

    setSignSellLoader(true);

    let tokenUri = mintNftTx;

    let tokenId = data.hexaMintId;

    const web3Modal = new Web3Modal();

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    //sign the transaction
    const signer = provider.getSigner();

    let contract = new ethers.Contract(nftaddress, ABI, signer);

    let transaction = await contract.repackageNFT(
      // nftaddress,
      tokenId,
      amendentData.name,
      tokenUri
    );
    if (transaction) {
      console.log("NFT market place also done");
      console.log(transaction, "NFT Market Place");
      setSignSellLoader(false);
      setSignSellButtonClass('approve-transaction-button-success')
      setSignSellButtonText('Done')
    } else {
      setSignSellLoader(false);
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
                {/* <img src={editPencil} alt="" /> */}
                {signSellLoader ? (
                  <div className="loader"></div>
                ) : (
                  <img src={signSellOrderImage} alt="" />
                )}
              </div>
              <div className="d-flex flex-column sign-sell-order-row-details">
                <p>Sign Sell Order</p>
                <p>Sign sell order using your wallet</p>
              </div>
            </div>
            <button
              className={
                signSellButtonClass
                // isSignSellOrderApproved
                //   ? "sign-sell-order-start-now-button"
                //   : "sign-sell-order-start-now-button-disabled"
              }
              disabled={!isSignSellOrderApproved}
              onClick={marketSell}
            >
              {signSellLoader ? (
                <img className="button-loader" src={Loader} />
              ) : (
                signSellButtonText
              )}
              {/* Start now */}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
