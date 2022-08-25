import React, { useState, useEffect } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { NFTStorage } from "nft.storage";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import ABI from "../smartContract_ABI/Abi.json";
import market from "../smartContract_ABI/market.json";
import pyramid from "../Assets/pyramid.png";
import pic1 from "../Assets/profile_2.jpeg";
import search_arrow from "../Assets/search_arrow.png";
import profile_setting from "../Assets/profile_setting.png";
import vector from "../Assets/vector.png";
import shape from "../Assets/Shape.png";
import Loader from "../Assets/Loader.png";
import FileUpload from "../Assets/FileUpload.png";
import close from "../Assets/close-modal.png";
import SubmitForm from "./SubmitForm";
//import frame from "../Assets/frame.png";
import "../css/coreasset.css";
import axios from "axios";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const STORAGE_NFT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3NzViNDMzQ0Q0NTUwNWJlMDk0N0M1Mzg2YzU0MUNhOUZjOTIwZDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDY5OTAzOTU1NSwibmFtZSI6Ik5GVGkifQ._gUNoDuZ2mNjTuH88y57fJ4dfzScsxhmVamqSrEaxL4";

const nftClient = new NFTStorage({
  token: STORAGE_NFT_TOKEN,
});

const nftaddress = "0x52779e4A38A715169D63fC2E3454cF43B264B77A";
const nftmarketaddress = "0xeC97A40A429d16E12ad43bD05Ddee826a50308b3";

export default function Coreasset({ addNft }) {
  const [imagePath, setImagePath] = useState("");
  const [modelData, setModalData] = useState("");
  const [loader, setLoader] = useState(false);
  const [nftData, setNftData] = useState({});
  const [buttonDisable, setButtonDisable] = useState(true)

  const [amendent, setAmendent] = useState({
    name: '',
    description: '',
    royalties: 10,
    size: Number,
    properties: '',
    songPdf: '',
    firstVideo: '',
    videoCoverPic: '',
    songXml: '',

  })
  const [amendent1, setAmendent1] = useState({

    songPdf: null,
    firstVideo: null,
    videoCoverPic: null,
    songXml: null,

  })
  const windowTop = () => {
    window.scroll(0, 0);

  }

  useEffect(() => {
    // debugger
    setNftData(addNft)
    windowTop()
  }, [addNft]);

  useEffect(() => {
    // debugger
    if (amendent.name && amendent.description && amendent.size && amendent.properties && amendent.firstVideo && amendent.videoCoverPic) {
      setButtonDisable(false)
    }
    else {
      setButtonDisable(true)

    }

  }, [amendent]);



  async function onChange(e) {
    // debugger;
    const file = e.target.files[0];
    const { name } = e.target;

    try {

      let bodyContent = new FormData();
      bodyContent.append("file", file);
      const resT = await axios.post(
        "https://api.nft.storage/upload",
        bodyContent,
        {
          headers: {
            Authorization: `Bearer ${STORAGE_NFT_TOKEN}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(resT);

      let url = `https://ipfs.io/ipfs/${resT.data.value.cid}/${file.name}`

      //try uploading the file
      // const added = await client.add(file, {
      //   progress: (prog) => console.log(`received: ${prog}`),
      // });
      //file saved in the url path below
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // alert(added.path)
      setImagePath(url);
      const image2 = await getExampleImage(url)

      setAmendent(prevState => ({
        ...prevState,
        [name]: url
      }))
      setAmendent1(prevState => ({
        ...prevState,
        [name]: image2
      }))
      alert("File update successFully")
      console.log(url);
    } catch (e) {
      console.log("Error uploading file: ", e);
    }
  }
  async function handleChange(e) {
    // debugger
    e.preventDefault();
    const { name, value } = e.target;

    setAmendent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // debugger
    let newData = {
      previewSongData: nftData,
      amendData: amendent,
      blobImageData: amendent1

    }
    setModalData(newData)

  }

  async function getExampleImage(imageUrl) {
    // debugger;
    const imageOriginUrl = imageUrl;
    const r = await fetch(imageOriginUrl);
    if (!r.ok) {
      throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
    }
    alert("file success")
    return r.blob();
  }



  return (
    <>
      <section id="songMetadata">
        <div className="container pb-5 mb-5">
          <div className=" col-md-12">
            <div className="row header">
              <div className="col-md-8">
                <div className="songs">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <h1 className="heading">Add core asset</h1>
                    </div>
                  </div>
                  <div className="song-details d-flex">
                    <p className="song">Upload song file</p>
                  </div>
                  <form>
                    <div className="form-group populate_group ">
                      <div className="row">
                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress">
                            Drag or choose your file to upload
                          </label>
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="uploadFile" style={{ cursor: "pointer" }}
                            className="item-amendement-file-upload-section w-100 my-2"
                          >
                            <img src={FileUpload} alt="Upload File" />
                            <p>.WAV or .MP3 Max 1Gb.</p>
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            name="firstVideo"
                            id="uploadFile"
                            accept="audio/mp3,audio/MP3,audio/wav,audio/WAV"
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group populate_group ">
                      <div className="row">
                        <div className="col-12 song-details d-flex">
                          <p className="song">Upload song/album cover art</p>
                        </div>

                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress">
                            Drag or choose your file to upload
                          </label>
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="uploadFile1" style={{ cursor: "pointer" }}
                            className="item-amendement-file-upload-section w-100 my-2"
                          >
                            <img src={FileUpload} alt="Upload File" />
                            <p>Max 1Gb.</p>
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            accept="image/png, image/PNG, image/jpeg, image/JPEG, image/jpg ,image/JPG"
                            name="videoCoverPic"
                            id="uploadFile1"
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group populate_group ">
                      <div className="row">
                        <div className="col-12 song-details d-flex">
                          <p className="song">
                            [Optional] Upload secondary PDFs (Lyrics, chord
                            charts, sheet music, etc)
                          </p>
                        </div>

                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress">
                            Drag or choose your file to upload
                          </label>
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="uploadFile2" style={{ cursor: "pointer" }}
                            className="item-amendement-file-upload-section w-100 my-2"
                          >
                            <img src={FileUpload} alt="Upload File" />
                            <p>Max 500Mb.</p>
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            accept="application/pdf,application/PDF"
                            name="songPdf"
                            id="uploadFile2"
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group populate_group ">
                      <div className="row">
                        <div className="col-12 song-details d-flex">
                          <p className="song">
                            [Optional] Tertiary metadata (Standard Midi
                            Music.xml)
                          </p>
                        </div>

                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress">
                            Drag or choose your file to upload
                          </label>
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="uploadFile3" style={{ cursor: "pointer" }}
                            className="item-amendement-file-upload-section w-100 my-2"
                          >
                            <img src={FileUpload} alt="Upload File" />
                            <p>.Max 500Mb.</p>
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            accept="text/xml"
                            name="songXml"
                            id="uploadFile3"
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group populate_group">
                      <div className="row">
                        <div className="col-12 song-details d-flex">
                          <p className="song">Item Details</p>
                        </div>

                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress2">ITEM NAME</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control text-white"
                            id="inputAddress2"
                            name="name"
                            onChange={handleChange}
                            placeholder='e. g. "Redeemable Bitcoin Card with logo"'
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group populate_group my-4">
                      <div className="row pt-3">
                        <div className="col-12 d-flex">
                          <label htmlFor="inputAddress3">Description</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control text-white"
                            id="inputAddress3"
                            name="description"
                            onChange={handleChange}
                            placeholder="e. g. “After purchasing you will able to recived the logo...”"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row d-flex justify-content-between">
                      <div className="form-group populate_group_1 col-md-4">
                        <div className="row">
                          <div className="col-12 d-flex">
                            <label htmlFor="">ROYALTIES</label>
                          </div>
                          <div className="col-12">

                            <article className="faq-accordion py-0">
                              <div className="faq-accordion-title d-flex my-2">
                                <h5 className="text-white mb-0">10%</h5>
                                {/* <label htmlFor="tgg-ti"> */}
                                <span className="arrow-icon">
                                  <img
                                    src={search_arrow}
                                    className="img-fluid"
                                  />
                                </span>
                                {/* </label> */}
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div className="form-group populate_group_1 col-md-3">
                        <div className="row">
                          <div className="col-12 d-flex">
                            <label htmlFor="">SIZE</label>
                          </div>
                          <div className="col-12">
                            <input
                              type="number"
                              className="form-control text-white"
                              placeholder="e. g. Size"
                              name="size"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group populate_group_1 col-md-3">
                        <div className="row">
                          <div className="col-12 d-flex">
                            <label htmlFor="">PROPERTIE</label>
                          </div>
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control text-white"
                              placeholder="e. g. Propertie"
                              name="properties"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-xl-6 col-12 col-sm-6 d-flex justify-content-lg-start justify-content-xl-start justify-content-md-start justify-content-center">
                      {!buttonDisable ?
                        <button
                          type="button"
                          className="btn btn-primary bt"
                          data-toggle="modal"
                          data-target="#submitAmendment1"
                          onClick={handleSubmit}
                        >
                          Create item{" "}
                          <img
                            src={vector}
                            className="icons"
                            alt="arrow-icon"
                          ></img>
                        </button> :
                        (<button
                          className="btn btn-primary bt"
                          disabled
                        >
                          Create item{" "}
                          <img
                            src={vector}
                            className="icons"
                            alt="arrow-icon"
                          ></img>
                        </button>)

                      }



                    </div>
                    <div className="col-lg-6 col-md-6 col-xl-6 col-12 d-flex col-sm-6 d-flex justify-content-lg-end justify-content-xl-end justify-content-md-end justify-content-center text-white align-items-center">
                      Auto saving
                      <div className="row">
                        <div className="col-1">
                          <img
                            src={shape}
                            className="icons"
                            alt="arrow-icon"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ********************* Model start here   ************************/}

                  <div
                    className="modal fade submit-amendemnt-modal-conatiner"
                    id="submitAmendment1"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="submitAmendmentLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header pl-4">
                          <h5
                            className="modal-title text-white"
                            id="submitAmendmentLabel1 "
                          >
                            Folow steps
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <div aria-hidden="true">
                              <img src={close} alt="" />
                            </div>
                          </button>
                        </div>
                        <div className="modal-body">
                          <SubmitForm amendentData={modelData} />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* **************** right side part start ******************* */}

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
                      <h5 className="card-title grass_title">song title</h5>
                      <p
                        type="button"
                        className="btn btn-outline-success grass_success"
                      >
                        2.45 ETH
                      </p>
                    </div>
                    <div className="grass_1 brder-bottom mb-3 pb-2">
                      <div className="col-4">
                        <div className="card_profile_img2">
                          <img src={pic1} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="card_profile_content">
                          <p className="text-white">artist name</p>
                        </div>
                      </div>
                    </div>
                    <div className="grass_2">
                      <p className="text-left">
                        <img
                          src={profile_setting}
                          alt=""
                          className="img-fluid iyyy"
                        />{" "}
                        <span className="span_1">Mint price</span>{" "}
                        <span className="span_2">0.1 ETH</span>{" "}
                      </p>

                      <p className="new">🔥 </p>
                    </div>
                    <i className="bi bi-x-circle grass_clear">
                      <p className="mx-2">Clear all</p>
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
