import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from "../smartContract_ABI/Abi.json";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../Assets/profile_2.jpeg";
import logo from "../Assets/navLogo1.png";
import bell from "../Assets/bell.png";
import notification2 from "../Assets/notification2.png";
import Wallet_img from "../Assets/wallet_img.png";
import notification1 from "../Assets/notification1.png";
import notification3 from "../Assets/notification3.png";
import notification4 from "../Assets/notification4.png";
import newicon from "../Assets/newicon.png";
import useWallet_connect from "../wallet_connect/Wallet_connect";
import "../css/header.css";

// async function getAccount(data) {
//   if (data) {
//     // debugger

//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const account = accounts[0];
//     // let TotalAmount = await getBalance(account)

//     // if(TotalAmount){
//     return { account };

//     // }
//   } else {
//     const account = null;
//     return account;
//   }
// }

export default function Header({ isLogin, walletAdd, getAccount, disconnectWallet }) {
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();
  console.log(isLogin);

  async function getBalance(account) {
    // debugger

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let beforePoint;
    let afterPoint;

    await provider.getBalance(account).then((balance) => {
      const balanceInEth = ethers.utils.formatEther(balance);
      beforePoint = balanceInEth.split(".")[0];
      afterPoint = balanceInEth.split(".")[1].slice(0, 4);
      setAccountBalance(beforePoint.concat("." + afterPoint));
    });

    return (beforePoint.concat("." + afterPoint));
  }

  useEffect(
    (e) => {
      // debugger
      // e.preventDefault();
      // const amount = isLogin == true ? getBalance(walletAdd) : "";
      // console.log(amount, isLogin);
      setLoggedIn(isLogin);
      // setAccountBalance(walletAdd);
    },
    [isLogin]
  );

  useEffect(() => {
    loggedIn == true && getBalance(walletAdd).then((res) => {
      console.log(res, loggedIn);
    });
  }, [loggedIn]);

  const walletConnect = async () => {
    if (typeof window !== "undefined") {
      getAccount("true").then((response) => {
        console.log(response);
        setAccountAddress(response.account);
        // setAccountBalance(response.TotalAmount);
      });
    }

    console.log(accountAddress);
  };

  return (
    <>
      <div className="container-fluid brder-bottom">
        <div className="row">
          <div className="container-lg container-fluid-md pb-2">
            <nav className="navbar navbar-expand-md navbar-dark" id="navbar">
              <div>
                <img
                  className="d-inline d-md-none d-lg-none d-xl-none"
                  src={logo}
                  alt=""
                />

                <Link
                  className="navbar-brand"
                  style={{ color: "#fff" }}
                  to={"/"}
                >
                  NFTi
                </Link>
              </div>
              <div className="mx-2 my-md-0 my-xl-0 my-lg-0 d-flex d-md-none d-lg-none d-xl-none align-items-center justify-content-center">
                <div
                  data-toggle="modal"
                  data-target="#popover"
                  className="smal d-flex align-items-center"
                >
                  <img src={bell} alt="" />
                  <div id="box"></div>
                </div>
                <div className="smal1 d-flex align-items-center mx-2">
                  <img src={pic1} alt="" className="img-fl" />
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse nav2 ml-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto pl-3"></ul>
                <form
                  onClick={() => history("/search")}
                  className="form-inline my-2 my-lg-0 mr-2 d-md-flex justify-content-md-center d-sm-flex justify-content-sm-center"
                >
                  <input
                    className=" mr-sm-2 navSearch "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i
                    className="fa fa-search fa-lg iconColor"
                    aria-hidden="true"
                  ></i>
                </form>

                <div
                  data-toggle="modal"
                  data-target="#popover"
                  className="mx-2 my-4 my-xl-0 my-lg-0 d-none d-md-flex d-lg-flex d-xl-flex align-items-center justify-content-center"
                >
                  <img src={bell} alt="" />
                  <div id="box"></div>
                </div>

                <button
                  className="btn text-white uploadButton mx-3"
                  onClick={() => history("/form")}
                >
                  Upload
                </button>
                {accountBalance ? (
                  <button
                    className="btn btn-inline-secondary connectWallet text-white"
                    onClick={() => { disconnectWallet(); setAccountBalance() }}
                  >
                    <img src={Wallet_img} alt="" className="img-fluid" />{" "}
                    {accountBalance} <span className="text-success"> ETH</span>
                  </button>
                ) : (
                  <button
                    className="btn btn-inline-secondary connectWallet text-white"
                    onClick={() => history("/wallet")}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="modal fade notification-modal-container"
        id="popover"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="triangle"></div>
          <div className="modal-content notification-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Notification
              </h5>
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">See All</span>
              </button>
            </div>
            <div className="modal-body d-flex flex-column">
              <div className="d-flex notification-panel">
                <div>
                  <img src={notification2} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <p>ETH Received</p>
                  <p>0.08 ETH Received</p>
                  <p>2 days ago</p>
                </div>
                <div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="d-flex notification-panel">
                <div>
                  <img src={notification3} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <p>C O I N Z</p>
                  <p>New bid 0.2 ETH</p>
                  <p>3 days ago</p>
                </div>
                <div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="d-flex notification-panel">
                <div>
                  <img src={notification4} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <p>ETH Received</p>
                  <p>0.08 ETH Received</p>
                  <p>4 days ago</p>
                </div>
                <div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="d-flex notification-panel">
                <div>
                  <img src={notification1} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <p>ETH Received</p>
                  <p>0.08 ETH Received</p>
                  <p>5 days ago</p>
                </div>
                <div>
                  <div className="dot"></div>
                </div>
              </div>

              <button className="hidden-button w-100 mt-4" type="button">
                <span aria-hidden="true">See All</span>
              </button>
            </div>
            {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
