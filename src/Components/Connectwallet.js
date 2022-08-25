import React, { useState } from "react";
import Wallet_1 from "../Assets/wallet_1.png";
import Wallet_2 from "../Assets/wallet_2.png";
import Wallet_3 from "../Assets/wallet_3.png";
import Wallet_4 from "../Assets/wallet_4.png";
import Qr_code from "../Assets/Qr_code.png";
import Qr_code_2 from "../Assets/Qr_code_2.png";
import Qr_code_mobile from "../Assets/Qr_code_mobile.png";
import { ethers } from "ethers";
import "../css/Connectwallet.css";

const Connectwallet = ({ changeWalletAddress, changeAcount, getAccount }) => {
  // debugger
  const [accountAddress, setAccountAddress] = useState("");

  // changeAcount(true);

  const walletConnect = async () => {
    // debugger

    if (typeof window.ethereum !== "undefined") {
      getAccount("true").then((response) => {
        console.log(response);
        setAccountAddress(response);
        if (response) {
          changeWalletAddress(response);
          changeAcount(true);
          // console.log()
        } else {
          changeAcount(false);
        }
        // (response)?props.changeAcount(true) : props.changeAcount(false)
      });
    }

    console.log(accountAddress);
  };
  return (
    <>
      <section id="connectWallet_section">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex border-bottom pt-5 pb-4">
              <h2 className="text-white connect_heading">
                &#x2190; Connect your wallet
              </h2>
            </div>
          </div>

          <div className="row pt-5 pb-4">
            <div className="col-md-6 ">
              <nav>
                <div
                  className="nav nav-tabs wallet_flex"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className=" connect_1 active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <img src={Wallet_1} alt="" className="img-fluid" />
                    <p>Formatic</p>
                  </a>
                  <a
                    className=" connect_1"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <img src={Wallet_2} alt="" className="img-fluid" />
                    <p>Coinbase Wallet</p>
                  </a>
                  <a
                    className=" connect_1"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    onClick={walletConnect}
                  >
                    <img src={Wallet_3} alt="" className="img-fluid" />
                    <p>MyEtherWallet</p>
                  </a>
                  <a
                    className=" connect_1"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <img src={Wallet_4} alt="" className="img-fluid" />
                    <p>Wallet Connect</p>
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-md-6">
              <div className="tab-content wallet_tab_content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active wallet_tab_content_1"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <img
                    src={Qr_code}
                    alt=""
                    className="img-fluid formatic_image_desktop"
                  />
                  <img
                    src={Qr_code_mobile}
                    alt=""
                    className="img-fluid formatic_image_mobile"
                  />
                </div>
                <div
                  className="tab-pane fade wallet_tab_content_2"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <h4 className=" ">Scan to connect</h4>
                  <p className="power">Powered by UI8.Wallet</p>
                  <img src={Qr_code_2} alt="" className="img-fluid" />
                  <div className="row ">
                    <div className="col-md-3">
                      <p className="wallet_p">Don’t have a wallet app?</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connectwallet;
