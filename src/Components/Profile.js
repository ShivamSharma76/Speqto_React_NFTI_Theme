import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import "../css/Profile.css";
import profile_avtar_dummy from "../Assets/profile_avtar_dummy.png";
import speqto from "../Assets/speqto.png";
import populate_avtar from "../Assets/populate_avtar.png";
import profile_image_6 from "../Assets/profile_image_6.png";
import profile_image_7 from "../Assets/profile_image_7.png";
import profile_image_4 from "../Assets/profile_image_4.png";
import profile_export from "../Assets/profile_export.png";
import profile_dot from "../Assets/profile_dot.png";
import profile_2 from "../Assets/profile_2.jpeg";
import profile_instagram from "../Assets/profile_instagram.png";
import profile_facebook from "../Assets/profile_facebook.png";
import profile_twitter from "../Assets/profile_twitter.png";
import profile_setting from "../Assets/profile_setting.png";
import filter_copy from "../Assets/filter_copy.png";
import market from "../smartContract_ABI/market.json";
import ABI from "../smartContract_ABI/Abi.json";

//  const nftaddress =  "0x956f41dCe063AbaeB0662908A87BeF8EBeeeaC61";
// const nftmarketaddress = "0x6A28E640ac5681c41347364592eb9394BD6D29A8";
const nftaddress =  "0x63Adb8734CB67b34b4F0Ae3Ec81ef45Bf55C70Ae";
const nftmarketaddress = "0x4f2a51A02c11fe59CF83aA342665e9302CF726c0";

export default function Profile({ setAmendData, accountAvailable }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [nfts, setNfts] = useState([]);

  async function loadNFTs() {
    // debugger
    if (window.ethereum) {
      // Do something 
      const metaMaskLogin = await window.ethereum._metamask.isUnlocked()
      if (!metaMaskLogin) {
        return alert("please connect with wallet first")
      }
    } else {
      alert("install metamask extension!!")
    }
    // debugger

    console.log(!accountAvailable);

    if (!accountAvailable) {
      // console.log(nfts);
      setNfts([])
      return
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);
    const metaWalletAddress = accounts[0];

    const web3Modal = new Web3Modal();

    let connection;

    try {
      connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const tokenContract = new ethers.Contract(
        nftaddress,
        ABI,
        provider
      );
      let totalNftCount = parseInt(await tokenContract.totalNFTCount());
      const data = [];
      // debugger
      for (let index = 0; index < totalNftCount; index++) {
        // const element = array[index];

        let newData = await tokenContract.connectedNFTs(index);
        data.push(newData);
        // if (newData.owner.toLowerCase() == metaWalletAddress.toLowerCase())
      }

      console.log({ contracts_data: data });
      const itemsData = [];

      const items = await Promise.all(
        data.map(async (i) => {
          // debugger
          const tokenUri = i.responseURI
          let CID = tokenUri?.split("//")[1]?.split("/")[0];
          let CID1 = tokenUri?.split("//")[1]?.split("/")[1];
          let meta
          if (CID && CID1) {
            let newData = await fetch(
              `https://${CID}.ipfs.nftstorage.link/${CID1}`,
              { method: "GET" }
            );
            meta = await newData.json();
          }



          // console.log(newData);
          let price, fileName, songData, files
          if (meta) {
            if (meta.songData) {

              price = meta?.songData?.price
              fileName = meta.fileName
              songData = meta.songData
              files = meta.files


            }
            else {
              price = '0'
              fileName = null
              songData = null
              files = null
            }
          }
          else {
            price = '0'
            fileName = null
            songData = null
            files = null
          }

          let imageData = meta?.image?.split("//")[1]?.split("/")[0];
          let imageData1 = meta?.image?.split("//")[1]?.split("/")[1];

          let item = {
            price,
            fileName,
            songData,
            files,
            mintId: i.mintID.toNumber(),
            hexaMintId: i.mintID,
            owner: i.owner,
            image: `https://${imageData}.ipfs.dweb.link/${imageData1}`,
            name: meta?.name,
            description: meta?.description,
          };
          itemsData.push(item);
          // return item;
        })
      );
      console.log(itemsData, "itemsData");

      setNfts(itemsData);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // debugger
    window.scroll(0, 0);
    loadNFTs();
  }, [accountAvailable]);

  const amendClick = (e) => {
    // debugger
    setAmendData(e);
  };

  return (
    <>
      <section id="profile_bg">
        <div className="container">
          <div className="row pro_row_banner">
            <div className="button_group_wrapper">
              <div className="buttons_group">
                <button className="profile_edit">
                  Edit Cover photo <i className="bi bi-image"></i>
                </button>
                <button className="edit_profile_pic">
                  Edit profile <i className="bi bi-pencil-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section end  */}

      <section id="profile_content">
        <div className="container">
          <div className="row mediaQuery">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6"  >
              <div className="profile_card">
                <div className="card">
                  <img
                    src={speqto}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body profile_body">
                    <h5 className="card-title text-center">artist name</h5>
                    <p className="card-text card_oo text-center">
                      0xc4c16a645...b21a{" "}
                      <img
                        src={filter_copy}
                        alt=""
                        className="img-fluid"
                        style={{ filter: "revert" }}
                      />
                    </p>
                    <p className="card-text card-artist text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="text-center">
                      <i className="bi bi-globe"></i>
                      https://artist-site.com
                    </a>

                    <div className="row mt-4 pro-row">
                      <div className=" col-3">
                        <div className="follow">
                          <button className="btn btnClass">Follow</button>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="follow_icon">
                          <img
                            src={profile_export}
                            alt=""
                            className="pro_export img-fluid"
                            style={{ width: "100%", filter: "revert" }}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="follow_dot">
                          <img
                            src={profile_dot}
                            alt=""
                            className="img-fluid"
                            style={{ width: "100%", filter: "revert" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="social_icon">
                      <p>
                        <img
                          src={profile_twitter}
                          alt=""
                          className="img-fluid"
                          style={{ width: "100%", filter: "revert" }}
                        />
                      </p>
                      <p>
                        <img
                          src={profile_instagram}
                          alt=""
                          className="img-fluid"
                          style={{ width: "100%", filter: "revert" }}
                        />
                      </p>
                      <p>
                        <img
                          src={profile_facebook}
                          alt=""
                          className="img-fluid"
                          style={{ width: "100%", filter: "revert" }}
                        />
                      </p>
                    </div>
                    <hr className="profile_break_line" />
                    <p
                      className="profile_since  mt-4"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "12px",
                        textAlign: "center",
                        color: "#777e91",
                      }}
                    >
                      Member since Mar 15, 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-6">
              <div className="portfolio-menu mt-5 mb-4">
                <ul>
                  <li className="btn btn-outline-dark active" data-filter="*">
                    All
                  </li>
                  <li className="btn btn-outline-dark" data-filter=".gts">
                    Sold
                  </li>
                  <li className="btn btn-outline-dark" data-filter=".lap">
                    Unsold
                  </li>
                  <li className="btn btn-outline-dark" data-filter=".selfie">
                    Pending Amendments
                  </li>
                  <li className="btn btn-outline-dark" data-filter=".selfie">
                    Amendments
                  </li>
                </ul>
              </div>

              <div className="portfolio-item row ">
                {
                  nfts.length ? <>
                    {
                      nfts?.map((currentElement, index) => (
                        <div key={index} className="item selfie col-lg-4 col-md-6 col-12">
                          <div className="col-12 profileNftListing">


                            <Link
                              className="fancylight popup-btn text-white"
                              data-fancybox-group="light"
                              to={""}
                            >

                              <img
                                className="img-fluid pee_image"
                                src={currentElement?.image}
                                alt="My First Song"
                                controls
                                controlsList="nodownload"
                              />
                            </Link>
                          </div>
                          <div className="grass">
                            <h5 className="card-title grass_title">
                              {currentElement?.name}
                            </h5>
                            <p
                              type="button"
                              className="btn btn-outline-success grass_success"
                            >
                              {currentElement?.price} ETH
                            </p>
                          </div>
                          <div className="grass_1">
                            <img src={populate_avtar} alt="" className="img-fluid" />
                            <p>3 in stock</p>
                          </div>

                          <Link
                            type="button"
                            className="btn btn-outline-secondary amend_btn grass_success"
                            onClick={() => amendClick(currentElement)}
                            to={{
                              pathname: "/amend",
                            }}
                          >
                            Iterate
                          </Link>

                          
                          <div className="pro_setting d-flex justify-content-between">
                            <p className="text-left  p_set">
                              <img
                                src={profile_setting}
                                alt=""
                                className="img-fluid iyyy"
                              />{" "}
                              <span className="span_1">Highest bid</span>{" "}
                              <span className="span_2">0.35 ETH</span>{" "}
                            </p>
                            <p className="text-right pro_hot">Hot🔥</p>
                          </div>
                        </div>
                      ))
                    }
                  </> :
                    <div className="profile-loader">
                      {
                        accountAvailable && <AiOutlineLoading3Quarters color="black" size={'3vw'} />
                      }
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
