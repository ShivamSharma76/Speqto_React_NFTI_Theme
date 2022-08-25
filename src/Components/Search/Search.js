import React, { useEffect} from "react";
import "../../css/Profile.css";
import "./Search.css";
import search_arrow from "../../Assets/search_arrow_1.png";
import profile_image_7 from "../../Assets/profile_image_7.png";
import Dil from "../../Assets/dil.png";
import Bid from "../../Assets/bid.png";
import image_29 from "../../Assets/image_29.png";
import image_20 from "../../Assets/image_20.png";
import image_35 from "../../Assets/image_35.png";
import image_34 from "../../Assets/image_34.png";
import image_33 from "../../Assets/image_33.png";
import image_32 from "../../Assets/image_32.png";
import image_31 from "../../Assets/image_31.png";
import search_loader from "../../Assets/search_loader.png";
import Resets from "../../Assets/reset_icon.png";
import Range from "../../Assets/range.png";
import populate_avtar from "../../Assets/populate_avtar.png";
import profile_export from "../../Assets/profile_export.png";
import profile_dot from "../../Assets/profile_dot.png";
import profile_2 from "../../Assets/profile_2.jpeg";
import profile_instagram from "../../Assets/profile_instagram.png";
import profile_facebook from "../../Assets/profile_facebook.png";
import profile_twitter from "../../Assets/profile_twitter.png";
import profile_setting from "../../Assets/profile_setting.png";
import filter_copy from "../../Assets/filter_copy.png";

export const Search = () => {
  useEffect( ()=>{
    window.scroll(0,0)
},[])
  return (
    <div>
      <section id="keyword">
        <div className="container">
          <div className="row text-center">
            <div className="  col-md-12 d-flex keyWord_input">
              {/* <form className="form-inline "> */}
              <input
                className="form-control search_form"
                type="search"
                placeholder="Type your keywords"
                aria-label="Search"
              />
              <i className="fa fa-search  search-faaa" aria-hidden="true"></i>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
      <section id="recently">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="recently_form">
                <div className="card-wrapper">
                  {/* <div className="faq-card"> */}
                  <main className="faq-content">
                    <div className="faq-articles">
                      <article className="faq-accordion">
                        <input
                          type="checkbox"
                          className="tgg-title"
                          id="tgg-title-1"
                        />

                        <div className="faq-accordion-title">
                          <label for="tgg-title-1">
                            <h2>Recently added</h2>
                            <span className="arrow-icon">
                              <img src={search_arrow} className="img-fluid" />
                            </span>
                          </label>
                        </div>

                        <div className="faq-accordion-content"></div>
                      </article>
                      {/* <input
                        type="range"
                        min="1"
                        max="100"
                        value="50"
                        className="slider"
                        id="myRange"
                      /> */}
                      <div className=" portfolio-menu portfolio-menu-search mt-2 mb-4 mobile">
                        <ul>
                          <li className="active " data-filter="*">
                            All items
                          </li>
                          <li className="" data-filter=".gts">
                            Newest
                          </li>
                          <li className="" data-filter=".lap">
                            Most Popular
                          </li>
                          {/* <li className="" data-filter=".selfie">
                            Amendable
                          </li> */}
                        </ul>
                      </div>
                      <div className="range_search">
                        <p className="most_liked_p">Price Range</p>

                        <img src={Range} alt="" className="img-fluid" />
                        <div className="range_flex">
                          <p className="range_para">0.1ETH</p>
                          <p className="range_para_1">0.1ETH</p>
                        </div>
                      </div>
                      <hr className="range_hr" />
                      <div className="most_liked">
                        <p className="most_liked_p">Likes</p>
                        <article className="faq-accordion">
                          <div className="faq-accordion-title">
                            <label for="tgg-title-1">
                              <h2>Most liked</h2>
                              <span className="arrow-icon">
                                <img src={search_arrow} className="img-fluid" />
                              </span>
                            </label>
                          </div>

                          <div className="faq-accordion-content"></div>
                        </article>
                      </div>
                      <p className="most_liked_p_color">Open</p>

                      <article className="faq-accordion">
                        <input
                          className="tgg-title"
                          type="checkbox"
                          id="tgg-title-5"
                        />

                        <div className="faq-accordion-title">
                          <label for="tgg-title-5">
                            <h2>Colors</h2>
                            <span className="arrow-icon">
                              <img src={search_arrow} className="img-fluid" />
                            </span>
                          </label>
                        </div>

                        <div className="faq-accordion-content">
                          <div className="color_div">
                            <div className="color_div_content">
                              <span className="transparent">p</span>
                              <p className="lead">All Colors</p>
                            </div>

                            <div className="color_div_content">
                              <span className="black">p</span>
                              <p className="lead">Black</p>
                            </div>
                            <div className="color_div_content">
                              <span className="green">p</span>
                              <p className="lead">Green</p>
                            </div>
                            <div className="color_div_content">
                              <span className="pink"></span>
                              <p className="lead">Pink</p>
                            </div>
                            <div className="color_div_content">
                              <span className="purple"></span>
                              <p className="lead">Purple</p>
                            </div>
                          </div>
                        </div>
                      </article>
                      <div className="most_liked">
                        <p className="most_liked_p">Creator</p>
                        <article className="faq-accordion">
                          <div className="faq-accordion-title">
                            <label for="tgg-title-3">
                              <h2>Verified only</h2>
                              <span className="arrow-icon">
                                <img src={search_arrow} className="img-fluid" />
                              </span>
                            </label>
                          </div>

                          <div className="faq-accordion-content"></div>
                        </article>
                      </div>

                      <hr className="range_hr" />
                    </div>
                    <div className="search_reset">
                      <img src={Resets} alt="" className="img-fluid" />
                      <p className="reset_para">Reset Filter</p>
                    </div>
                  </main>

                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className=" portfolio-menu portfolio-menu-search mt-2 mb-4 desktop">
                <ul>
                  <li className="active " data-filter="*">
                    All items
                  </li>
                  <li className="" data-filter=".gts">
                    Newest
                  </li>
                  <li className="" data-filter=".lap">
                    Most Popular
                  </li>
                  <li className="" data-filter=".selfie">
                    Amendable
                  </li>
                </ul>
              </div>
              <div className="portfolio-item prooo_row row ">
                <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img
                      className="img-fluid pee_image"
                      src={image_20}
                      alt="My First Song"
                    />
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
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">amazing song 1</h5>
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
                </div>
                <div className="item item_search gts col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_29} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">amazing song 2</h5>
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
                      <span className="span_2">none</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_35} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">amazing song 3</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_34} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">more songs</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_33} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">even more songs</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12 iro">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_33} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">new new songs</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_32} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">even more song</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img className="img-fluid pee_image" src={image_31} alt="" />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">digital song</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
                <div className="item item_search selfie col-lg-4 col-md-6 col-12">
                  <div className="fancylight popup-btn" data-fancybox-group="light">
                    <img
                      className="img-fluid pee_image"
                      src={profile_image_7}
                      alt=""
                    />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="purchase">purchasing !</p>
                        <img src={Dil} alt="" className="img-fluid" />
                      </div>

                      <button className="btn btn-primary">
                        Place a bid{" "}
                        <img src={Bid} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="grass">
                    <h5 className="card-title grass_title">art songs</h5>
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
                      <span className="span_2">0.2 ETH</span>{" "}
                    </p>
                    <p className="text-right pro_hot">Hot🔥</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-secondary btn_loader">
                <img src={search_loader} alt="" className="img-fluid" /> Load
                More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
