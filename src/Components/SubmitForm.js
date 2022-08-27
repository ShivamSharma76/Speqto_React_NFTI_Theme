import React, { useState, useEffect } from 'react'
import { create as ipfsHttpClient } from "ipfs-http-client";
import { NFTStorage } from "nft.storage";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import ABI from "../smartContract_ABI/Abi.json";
import market from "../smartContract_ABI/market.json";
import AmendmentIcon from '../Assets/AmendmentIcon.png'
import fl from '../Assets/fl.png'
import rightTick from '../Assets/rightTick.png'
import editPencil from '../Assets/Pencil.png'
import purse from '../Assets/purse.png'
import Loader from '../Assets/Loader.png'
import ApproveError from '../Assets/ApproveError.png'
import purseError from '../Assets/purseError.png'
import ApproveSuccess from '../Assets/ApproveSuccess.png'

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const nftClient = new NFTStorage({
    token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3NzViNDMzQ0Q0NTUwNWJlMDk0N0M1Mzg2YzU0MUNhOUZjOTIwZDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDY5OTAzOTU1NSwibmFtZSI6Ik5GVGkifQ._gUNoDuZ2mNjTuH88y57fJ4dfzScsxhmVamqSrEaxL4",
});

const nftaddress = "0x63Adb8734CB67b34b4F0Ae3Ec81ef45Bf55C70Ae";
const nftmarketaddress = "0x4f2a51A02c11fe59CF83aA342665e9302CF726c0";


export default function SubmitForm({ amendentData }) {
    const [createNft, setCreateNft] = useState("");
    const [mintNftTx, setMintNftTx] = useState("");

    const [isOptimizeGas, setIsOptimizeGas] = useState(false);
    const [secondDisabled, setSecondDisabled] = useState(false);
    const [isSignInWithWallet, setIsSignInWithWallet] = useState(false)
    const [isTransactionApproved, setIsTransactionApproved] = useState(false);
    const [isTransactionApproved1, setIsTransactionApproved1] = useState(false);
    const [isTransactionApproved2, setIsTransactionApproved2] = useState(false);
    const [transactionButtonImage, setTransactionButtonImage] = useState(fl);
    const [transactionButtonImage1, setTransactionButtonImage1] = useState(editPencil);
    const [transactionButtonImage2, setTransactionButtonImage2] = useState(purse);
    const [transactionButtonText, setTransactionButtonText] = useState("Start Now")
    const [transactionButtonText1, setTransactionButtonText1] = useState("Start Now")
    const [transactionButtonText2, setTransactionButtonText2] = useState("Start Now")
    const [transactionButtonClass, setTransactionButtonClass] = useState("approve-transaction-button")
    const [transactionButtonClass1, setTransactionButtonClass1] = useState("approve-transaction-button")
    const [transactionButtonClass3, setTransactionButtonClass3] = useState("approve-transaction-button-disable")
    const [transactionButtonClass2, setTransactionButtonClass2] = useState("approve-transaction-button")
    const [transactionButtonClass4, setTransactionButtonClass4] = useState("approve-transaction-button-disable")

    const [loader, setLoader] = useState(false);
    const [loader1, setLoader1] = useState(false);
    const [loader2, setLoader2] = useState(false);

    const toggle = () => {
        setIsOptimizeGas(!isOptimizeGas);
        console.log(isOptimizeGas);
    }

    const signInWithWallet = (e) => {
        e.preventDefault();
        setIsSignInWithWallet(true)
    }

    async function approveTransaction(e) {
        // debugger
        e.preventDefault();
        setLoader(true)

        const metadata = await nftClient.store({
            name:createNft.amendData.name,
            description: createNft.amendData.description,
            image: createNft.blobImageData.videoCoverPic,
            songData: createNft.previewSongData,
            fileName: createNft.amendData,
            files: [createNft.blobImageData],
        });
        console.log(metadata.url);
        if (metadata.url) {
            mintNft(metadata.url);
        } else {
            setLoader(false);
        }

    }
    async function approveTransaction1(e) {
        e.preventDefault();
        setLoader1(true)
        // marketSell()
        setTimeout(() => {
            let result = true;
            if (result) {
        setTransactionButtonText1("Done");
                setIsTransactionApproved1(true);
                setTransactionButtonClass1('approve-transaction-button-success');
                setTransactionButtonImage1(ApproveSuccess);
                setLoader1(false)
            }
            else {
                setIsTransactionApproved1(false)
                setTransactionButtonText1("Failed")
                setTransactionButtonClass1('approve-transaction-button-fail');
                setTransactionButtonImage1(ApproveError)
                setLoader1(false)
            }
        }, 2000)


    }
    const approveTransaction2 = (e) => {
        e.preventDefault();
        setLoader2(true)
        setTimeout(() => {
            let result = true;
            if (result) {
                setTransactionButtonText2("Done");
                setIsTransactionApproved2(true);
                setTransactionButtonClass2('approve-transaction-button-success');
                setTransactionButtonImage2(ApproveSuccess);
                setLoader2(false)
            } else {
                setIsTransactionApproved2(false)
                setTransactionButtonText2("Failed")
                setTransactionButtonClass2('approve-transaction-button-fail');
                setTransactionButtonImage2(purseError)
                setLoader2(false)
            }
        }, 2000)
    }

    useEffect(() => {
        // debugger
        window.scroll(0, 0)
        setCreateNft(amendentData)
    }, [amendentData])



    const mintNft = async (e) => {
        // debugger
        // console.log("hi");

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        console.log("wallet Connect is done");
        const provider = new ethers.providers.Web3Provider(connection);

        const signer = provider.getSigner();
        let contract = new ethers.Contract(nftaddress, ABI, signer);
        let transaction = await contract.mintNFT(createNft.amendData.name, e);
        let tx = await transaction.wait();

        if (tx) {
            setMintNftTx(tx);
            setTimeout(() => {
                setTransactionButtonText("Done");
                setIsTransactionApproved(true);
                setTransactionButtonClass('approve-transaction-button-success');
                setTransactionButtonImage(ApproveSuccess);
                setLoader(false)
            }, 2000)
        } else {
            setTimeout(() => {

                setIsTransactionApproved(false)
                setTransactionButtonText("Failed")
                setTransactionButtonClass('approve-transaction-button-fail');
                setTransactionButtonImage(ApproveError)
            }, 2000)
            setLoader(false)
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



        let transaction = await contract.addNftToMarket(
            tokenId,
            price,
            { value: price, gasLimit: 3000000 }
        );
        if (transaction) {
            console.log("NFT market place also done");
            console.log(transaction, "NFT Market Place");
            setTimeout(() => {
                setTransactionButtonText1("Done");
                setIsTransactionApproved1(true);
                setTransactionButtonClass1('approve-transaction-button-success');
                setTransactionButtonImage1(ApproveSuccess);
                setLoader1(false)
            }, 2000)
            // setLoader(false);
        } else {
            setTimeout(() => {
            setIsTransactionApproved1(false)
            setTransactionButtonText1("Failed")
            setTransactionButtonClass1('approve-transaction-button-fail');
            setTransactionButtonImage1(ApproveError)
            setLoader1(false)
        }, 2000)
            // setLoader(false);
        }
    };



    return (
        <>

            <div className='d-flex flex-column amendment-modal-body-container'>

                <div className='d-flex amendment-modal-body-row'>
                    <div className='amendment-modal-body-row-image1'>
                        {
                            loader ? <div className='loader'></div> :
                                <img src={transactionButtonImage} alt="" />
                        }
                    </div>
                    <div className='amendment-modal-body-row-details d-flex flex-column'>
                        <p>Upload files & Mint token</p>
                        <p>Call contract method</p>

                    </div>
                </div>
                <div className='amendment-modal-body-btns d-flex flex-column'>
                    <button disabled={isTransactionApproved} className={transactionButtonClass}
                        onClick={approveTransaction}>
                        {
                            loader ? <img className='button-loader' src={Loader} /> : transactionButtonText
                        }
                    </button>

                    {transactionButtonText === "Failed" ? <p className='approve-error-text'>Something went wrong, please <span>try again</span> </p> : ""}
                </div>


                <div className='d-flex amendment-modal-body-row'>
                    <div className='amendment-modal-body-row-image1'>
                        {
                            loader1 ? <div className='loader'></div> :
                                <img src={transactionButtonImage1} alt="" />
                        }
                    </div>
                    <div className='amendment-modal-body-row-details d-flex flex-column'>
                        <p>Sign sell order</p>
                        <p>Sign sell order using your wallet</p>

                    </div>
                </div>
                <div className='amendment-modal-body-btns d-flex flex-column'>
                    <button disabled={isTransactionApproved1 || !isTransactionApproved} className={isTransactionApproved ? transactionButtonClass1 : transactionButtonClass3}
                        onClick={approveTransaction1}>
                        {
                            loader1 ? <img className='button-loader' src={Loader} /> : transactionButtonText1
                        }
                    </button>

                    {transactionButtonText1 === "Failed" ? <p className='approve-error-text'>Something went wrong, please <span className="tryAgainLink" onClick={approveTransaction1} >try again</span> </p> : ""}
                </div>



                <div className='d-flex amendment-modal-body-row'>
                    <div className='amendment-modal-body-row-image1'>
                        {
                            loader2 ? <div className='loader'></div> :
                                <img src={transactionButtonImage2} alt="" />
                        }
                    </div>
                    <div className='amendment-modal-body-row-details d-flex flex-column'>
                        <p>Sign lock order</p>
                        <p>Sign lock order using your wallet</p>

                    </div>
                </div>

                <div className='amendment-modal-body-btns d-flex flex-column'>
                    <button disabled={isTransactionApproved2 || !isTransactionApproved1} className={isTransactionApproved1 ? transactionButtonClass2 : transactionButtonClass4}
                        onClick={approveTransaction2}>
                        {
                            loader2 ? <img className='button-loader' src={Loader} /> : transactionButtonText2

                        }
                    </button>

                    {transactionButtonText2 === "Failed" ? <p className='approve-error-text'>Something went wrong, please <span className="tryAgainLink" onClick={approveTransaction2}>try again</span> </p> : ""}
                </div>
            </div>


        </>
    )
}
