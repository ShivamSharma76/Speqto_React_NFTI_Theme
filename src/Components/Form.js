import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import pyramid from "../Assets/pyramid.png";
import profile_setting from "../Assets/profile_setting.png";
import line from "../Assets/Line.png";
import green from "../Assets/green.png";
import icons from "../Assets/icons.png";
import Loader from "../Assets/Loader.png";
import blue from "../Assets/blue.png";
import close from "../Assets/close-modal.png";
import SubmitForm from "./SubmitForm";
import vector from "../Assets/vector.png";
import populate_avtar from "../Assets/populate_avtar.png";
import { create as ipfsHttpClient } from 'ipfs-http-client'
//import frame from "../Assets/frame.png";
import "../css/Form.css";

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

export default function Form({ setCreateNFT }) {
  const [buttonDisable, setButtonDisable] = useState(true)
  const [amendent, setAmendent] = useState({
    songName: '',
    songArtist: '',
    yearCreated: '',
    yearReleased: '',
    albumName: '',
    genre: '',
    writingCredits: '',
    copyright: '',
    numberToMint: '',
    price: '',
    putOnSale: "",
    amendentSubmission: ''
  })
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    // window.scroll(0, 0);
    if(amendent.songName && amendent.songArtist &&  amendent.yearCreated && amendent.albumName && amendent.genre && amendent.writingCredits && amendent.copyright && amendent.numberToMint && amendent.price ) {
      setButtonDisable(false)
    }
    else{
      setButtonDisable(true)

    }
    
  }, [amendent]);

  const handleChange = e => {
    // debugger
    e.preventDefault();
    const { name, value } = e.target;

    setAmendent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = () => {
    setCreateNFT(amendent)
  }
  return (
    <>
      <section id="songMetadata">
        <div className="container">
          <div className=" col-md-12">
            <div className="row header">
              <div className="col-md-8">
                <div className="songs">
                  <h1 className="heading">Populate song metadata</h1>
                  <div className="song-details">
                    <p className="song">Song Details</p>
                  </div>
                  <form>
                    <div className="form-group populate_group d-flex flex-column">
                      <label htmlFor="inputAddress">SONG name</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress"
                        name='songName' onChange={handleChange}
                      />
                    </div>
                    <div className="form-group populate_group">
                      <label htmlFor="inputAddress2">SONG ARTIST</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress2"
                        name='songArtist' onChange={handleChange}
                      />
                    </div>
                    <div className="form-row row_form">
                      <div className="form-group populate_group_1 col-md-6">
                        <label htmlFor="">Year created</label>
                        <input type="text" className="form-control text-white" name='yearCreated' onChange={handleChange} />
                      </div>
                      <div className="form-group populate_group_1 pro_2 col-md-6">
                        <label htmlFor="">year released</label>
                        <input type="text" className="form-control text-white" name='yearReleased' onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group populate_group">
                      <label htmlFor="inputAddress">album name</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress"
                        name='albumName' onChange={handleChange}
                      />
                    </div>
                    <div className="form-group populate_group">
                      <label htmlFor="inputAddress">GENRE</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress"
                        name='genre' onChange={handleChange}
                      />
                    </div>
                    <div className="form-group populate_group">
                      <label htmlFor="inputAddress">
                        WRITING CREDITS (Separate by commas)
                      </label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress"
                        name='writingCredits' onChange={handleChange}
                      />
                    </div>
                    <div className="form-group populate_group">
                      <label htmlFor="inputAddress">COpyright</label>
                      <input
                        type="text"
                        className="form-control text-white"
                        id="inputAddress"
                        name='copyright' onChange={handleChange}
                      />
                    </div>
                    <div className="song-details">
                      <p className="song">Smart Contract Options</p>
                    </div>
                    <div className="form-row row_form">
                      <div className="form-group populate_group_1 col-md-6">
                        <label htmlFor="">NUMBER TO MINT</label>
                        <input type="text" className="form-control text-white" id="" name='numberToMint' onChange={handleChange} />
                      </div>
                      <div className="form-group populate_group_1 pro_2 col-md-6">
                        <label htmlFor="">PRICE (in ETH)</label>
                        <input type="text" className="form-control text-white" id="" name='price' onChange={handleChange} />
                      </div>
                    </div>
                  </form>

                  <div className=" text_check to_check">
                    <div className="text_check_para">
                      <p className="form-text">Put on sale</p>

                      <p className="form-text1">
                        List this item directly on marketplaces
                      </p>
                    </div>
                    <label className="switch">
                      <input value={amendent.putOnSale} type="checkbox" name='putOnSale' onChange={(e) => {
                        setAmendent({ ...amendent, putOnSale: !amendent.putOnSale });
                        console.log(e.target.value);
                      }} />
                      <span className="form-slider round"></span>
                    </label>
                    {/* <img src={frame} className="onoff1" alt="symbol"/> */}
                  </div>
                </div>
                <div className="text_check_1">
                  <div className="text_check_para_1">
                    <p className="form-text">Allow amendment submissions</p>
                    <p className="form-text1">
                      Allow users to submit amendments, covers, and remixes to
                      be approved by yourself
                    </p>
                  </div>
                  <label className="switch ">
                    <input value={amendent.amendentSubmission} type="checkbox" name='amendentSubmission' onChange={(e) => {
                      setAmendent({ ...amendent, amendentSubmission: !amendent.amendentSubmission });
                      console.log(e.target.value);
                    }} />
                    <span className="form-slider round"></span>
                  </label>
                  {/* <img src={frame} className="onoff" alt="symbol"/> */}
                </div>
                <div className="choose">
                  <p className="form-text">Choose collection</p>

                  <p className="form-text1">
                    Choose an exiting collection or create a new one
                  </p>
                </div>
                <div className="row form-row form_row_box">
                  <div className=" form-box1">
                    <img src={line} className="plus" alt="plus-icon" />
                    <Link className="nav-link" to={"/core_asset"}>
                      {/* Discover */}
                      <p className="songss">Create collection</p>
                    </Link>
                    {/* <link rel="stylesheet" href="/core_asset" /> */}
                  </div>
                  <div className=" form-box1">
                    <img src={green} className="green" alt="green-circle" />
                    <p className="songss">Album 1 - My first album</p>
                  </div>
                  <div className="form-box1">
                    <img src={icons} className="icon" alt="circle" />
                    <p className="songss">Album 2 - My second album</p>
                  </div>
                  <div className=" form-box1">
                    <img src={blue} className="circle" alt="blue-circle" />
                    <p className="songss">Album 3 - my third album</p>
                  </div>
                </div>
                <div
                  className="my-4 mb-5 justify-content-between"
                  style={{ display: "flex", alignItems: "center" }}
                >
                {!buttonDisable?
                  <Link className="nav-link p-0" to={"/core_asset"}>
                    <button

                      type="submit"
                      className="btn btn-primary assets"
                      onClick={handleSubmit}
                    >
                      {/* Discover */}
                      Add core assets

                      <img src={vector} className="icons" alt="arrow-icon"></img>
                    </button>
                  </Link> : 
                   ( <button 
                      className="btn btn-primary assets"
                      disabled
                    >
                      Add core assets

                      <img src={vector} className="icons" alt="arrow-icon"></img>
                    </button>
                   )
                 
                 }

                  
                  <div className="last text-center d-flex align-items-center">
                    <p className="last1 p-0 m-0 px-3">Auto saving</p>
                    <img src={Loader} alt="" />
                  </div>
                </div>


              </div>

              <div className="col-md-4">
                <div className="card-deck">
                  <div className="card populate_card">
                    <h5 className="card-title populate_title">Preview</h5>
                    <img
                      src={pyramid}
                      className="card-img-top populate_image"
                      alt="pyramid"
                    />

                    <div className="grass">
                      <h5 className="card-title grass_title">
                        Black-golden-Tiger
                      </h5>
                      <p
                        type="button"
                        className="btn btn-outline-success grass_success"
                      >
                        2.45ETH
                      </p>
                      {/* <p className="stock"> 3 in stock</p> */}
                    </div>
                    <div className="grass_1">
                      <img src={populate_avtar} alt="" className="img-fluid" />
                      <p>3 in stock</p>
                      {/* <p className="stock"> 3 in stock</p> */}
                    </div>
                    <hr className="card_hr" />
                    <div className="pro_setting d-flex justify-content-between">
                      <p className="text-left">
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
                    <i className="bi bi-x-circle grass_clear">
                      <p>clear all</p>
                    </i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
