import React from "react";
import "./Faq.css";
import Music from "../Music-Card/Music.js";
import profile_image_7 from "../../Assets/profile_image_7.png";
import Faq_slider_1 from "../../Assets/faq_slider_1.png";
import Faq_slider_2 from "../../Assets/faq_slider_2.png";
import Faq_slider_3 from "../../Assets/faq_slider_3.png";
import Dil from "../../Assets/dil.png";
import Bid from "../../Assets/bid.png";
import pyramid from "../../Assets/pyramid.png";
import populate_avtar from "../../Assets/populate_avtar.png";
import profile_setting from "../../Assets/profile_setting.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../css/Profile.css";
import "../Search/Search.css";
import Faq_1 from "../../Assets/faq_general.png";
import Faq_2 from "../../Assets/faq_support.png";
import Faq_3 from "../../Assets/faq_cloud.png";
import Faq_4 from "../../Assets/faq_window.png";

export default function Faq() {
  return (
    <div>
      <section id="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-9">
              <div className="faq_para_head">
                <p className="lead">learn how to get started</p>
              </div>
              <div className="faq_heading">
                <h2 className="text-white">Frequently asked questions</h2>
              </div>
              <div className="faq_para_second">
                <p className="lead">
                  Join Stacks community now to get free updates and also alot of
                  freebies are waiting for you or{" "}
                  <a href="#">Contact Support</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq_section_2">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="faq_genral">
                <img src={Faq_1} alt="faq_genral" className="img-fluid" />
                <p className="lead text-white">General</p>
              </div>
              <div className="faq_genral">
                <img src={Faq_2} alt="faq_genral" className="img-fluid" />
                <p className="lead">Support</p>
              </div>
              <div className="faq_genral">
                <img src={Faq_3} alt="faq_genral" className="img-fluid" />
                <p className="lead">Hosting</p>
              </div>
              <div className="faq_genral">
                <img src={Faq_4} alt="faq_genral" className="img-fluid" />
                <p className="lead">Product</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="faq_container">
                <div className="faq">
                  <input id="faq-a" type="checkbox" />
                  <label for="faq-a">
                    <p className="faq-heading faq_gen">How does it work </p>
                    <div className="faq-arrow"></div>
                    <p className="faq-text">
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </p>
                    <p className="btn text-white faq_btn_learn">Learn more</p>
                  </label>
                  <input id="faq-b" type="checkbox" />
                  <label for="faq-b">
                    <p className="faq-heading">How to start with Stacks</p>
                    <div className="faq-arrow"></div>
                    <p className="faq-text">
                      Upgrading is a slow process and will take around 3-10
                      days.{" "}
                      <strong>
                        In order to control the risk and secure the space you
                        earned, we will gradually process it.
                      </strong>{" "}
                      during this time you can still use your account as normal
                      as usual.
                    </p>
                    <p className="btn text-white faq_btn_learn">Learn more</p>
                  </label>
                  <input id="faq-c" type="checkbox" />
                  <label for="faq-c">
                    <p className="faq-heading">WDose it suppport Dark Mode</p>
                    <div className="faq-arrow"></div>
                    <p className="faq-text">
                      NO ACCESS TO YOUR PERSONAL ACCOUNT OR INFO IS REQUIRED!
                      All I need from you is your Dropbox referral link.
                    </p>
                    <p className="btn text-white faq_btn_learn">Learn more</p>
                  </label>
                  <input id="faq-d" type="checkbox" />
                  <label for="faq-d">
                    <p className="faq-heading">Does it support Auto-Layout</p>
                    <div className="faq-arrow"></div>
                    <p className="faq-text">
                      Log in to the Dropbox website and get your referral link:
                      www.dropbox.com/referral. Copy the link
                    </p>
                    <p className="btn text-white faq_btn_learn">Learn more</p>
                  </label>
                  <input id="faq-e" type="checkbox" />
                  <label for="faq-e">
                    <p className="faq-heading">What is Stacks Design System</p>
                    <div className="faq-arrow"></div>
                    <p className="faq-text">
                      Yes, you can! Just send me all the referral links during
                      the checkout process, including a short note, what account
                      should receive which amount of space.
                    </p>
                    <p className="btn text-white faq_btn_learn">Learn more</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hot_bid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot_bid_heading ">
                <h2 className="text-white">Hot Bid</h2>
              </div>
              <OwlCarousel
                className="owl-theme "
                loop
                margin={15}
                items={4}
                nav
              >
                <div className="item  ">
                  <div className="card-deck">
                    <div className="card faq_card">
                      <img
                        src={Faq_slider_1}
                        className="card-img-top populate_image faq_img_1"
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
                      </div>
                      <div className=" grass_faq">
                        <img
                          src={populate_avtar}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="text-white">3 in stock</p>
                      </div>
                      <hr className="card_hr" />
                      <div className="pro_setting d-flex justify-content-between">
                        <p className="text-left faq_owl_bid">
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
                  </div>
                </div>
                <div className="item  ">
                  <div className="card-deck">
                    <div className="card faq_card">
                      <img
                        src={Faq_slider_2}
                        className="card-img-top populate_image faq_img_1"
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
                      </div>
                      <div className=" grass_faq">
                        <img
                          src={populate_avtar}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="text-white">3 in stock</p>
                      </div>
                      <hr className="card_hr" />
                      <div className="pro_setting d-flex justify-content-between">
                        <p className="text-left faq_owl_bid">
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
                  </div>
                </div>
                <div className="item  ">
                  <div className="card-deck">
                    <div className="card faq_card">
                      <img
                        src={Faq_slider_3}
                        className="card-img-top populate_image faq_img_1"
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
                      </div>
                      <div className=" grass_faq">
                        <img
                          src={populate_avtar}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="text-white">3 in stock</p>
                      </div>
                      <hr className="card_hr" />
                      <div className="pro_setting d-flex justify-content-between">
                        <p className="text-left faq_owl_bid">
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
                  </div>
                </div>
                <div className="item  ">
                  <div className="card-deck">
                    <div className="card faq_card">
                      <img
                        src={Faq_slider_2}
                        className="card-img-top populate_image faq_img_1"
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
                      </div>
                      <div className=" grass_faq">
                        <img
                          src={populate_avtar}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="text-white">3 in stock</p>
                      </div>
                      <hr className="card_hr" />
                      <div className="pro_setting d-flex justify-content-between">
                        <p className="text-left faq_owl_bid">
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
                  </div>
                </div>
                <div className="item  ">
                  <div className="card-deck">
                    <div className="card faq_card">
                      <img
                        src={Faq_slider_2}
                        className="card-img-top populate_image faq_img_1"
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
                      </div>
                      <div className=" grass_faq">
                        <img
                          src={populate_avtar}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="text-white">3 in stock</p>
                      </div>
                      <hr className="card_hr" />
                      <div className="pro_setting d-flex justify-content-between">
                        <p className="text-left faq_owl_bid">
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
                  </div>
                </div>
              </OwlCarousel>
              ;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
