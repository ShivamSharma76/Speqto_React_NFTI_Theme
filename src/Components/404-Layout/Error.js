import React from "react";
import "./Error.css";
import Error_pic from "../../Assets/error.png";
import Explore_1 from "../../Assets/explore_1.png";
import Explore_2 from "../../Assets/explore_2.png";
import Explore_3 from "../../Assets/explore_3.png";
import Explore_4 from "../../Assets/explore_4.png";
import Arrow_left from "../../Assets/arrow_left.png";

export default function Error() {
  return (
    <div>
      <section id="error_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="error_image">
                <img src={Error_pic} alt="" className="img-fluid" />
              </div>
              <div className="error_heading">
                <h1 className="text-white text-center">
                  Sorry, we couldn’t find any results for this search.
                </h1>
              </div>
              <div className="error_para">
                <p className="text-center">Maybe give one of these a try?</p>
              </div>
              <div className="search_info error_info">
                <form className="form-inline my-2 my-lg-0 mr-2 d-md-flex justify-content-md-center d-sm-flex justify-content-sm-center">
                  <input
                    className="form-control mr-sm-2 navSearch_error "
                    type="search"
                    placeholder="Enter your search..."
                    aria-label="Search"
                  />
                  <img src={Arrow_left} alt="" className="img-fluid" />
                </form>
              </div>
            </div>
            <div className="col-md-12 error_explore">
              <div className="explore_heading">
                <h2 className="text-white text-center">Explore more</h2>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="artWork">
                    <img src={Explore_1} alt="" className="img-fluid" />
                    <div className="explore_content">
                      <p className="text-white">Artwork</p>
                      <span>138 items</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="artWork">
                    <img src={Explore_2} alt="" className="img-fluid" />
                    <div className="explore_content">
                      <p className="text-white">Photography</p>
                      <span>138 items</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="artWork">
                    <img src={Explore_3} alt="" className="img-fluid" />
                    <div className="explore_content">
                      <p className="text-white">Game</p>
                      <span>138 items</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="artWork">
                    <img src={Explore_4} alt="" className="img-fluid" />
                    <div className="explore_content">
                      <p className="text-white">Music</p>
                      <span>138 items</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
