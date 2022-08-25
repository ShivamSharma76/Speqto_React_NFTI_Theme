import React from "react";
import "../../css/Profile.css";
import "../Search/Search.css";
import image_20 from "../../Assets/image_20.png";
import Dil from "../../Assets/dil.png";
import Bid from "../../Assets/bid.png";
import populate_avtar from "../../Assets/populate_avtar.png";
import profile_setting from "../../Assets/profile_setting.png";

export default function Music() {
  return (
    <div>
      <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
        <div className="fancylight popup-btn" data-fancybox-group="light">
          <img className="img-fluid pee_image" src={image_20} alt="My First Song" />
          <div className="overlay">
            <div className="overlay_text">
              <p className="purchase">purchasing !</p>
              <img src={Dil} alt="" className="img-fluid" />
            </div>
            {/* <div className="overlay_bid">
                        <p>Place a bid</p>
                        <img src={Bid} alt="" className="img-fluid" />
                      </div> */}
            <button className="btn btn-primary">
              Place a bid <img src={Bid} alt="" className="img-fluid" />
            </button>
          </div>
        </div>
        <div className="grass">
          <h5 className="card-title grass_title">amazing song 1</h5>
          <p type="button" className="btn btn-outline-success grass_success">
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
            <img src={profile_setting} alt="" className="img-fluid iyyy" />{" "}
            <span className="span_1">Highest bid</span>{" "}
            <span className="span_2">0.35 ETH</span>{" "}
          </p>
          <p className="text-right pro_hot">Hot🔥</p>
        </div>
      </div>
    </div>
  );
}
