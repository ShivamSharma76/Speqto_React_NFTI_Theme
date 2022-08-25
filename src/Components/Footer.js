import React from "react";
import '../css/footer.css'
import logo from "../Assets/navLogo1.png";
import RightArrowPic from '../Assets/Small.png'
import search_arrow from "../Assets/search_arrow.png";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid brder-top">
                <div className="row">


                    <div className="container">
                        <div className="row brder-bottom py-5 mt-4">
                            <div className="col-lg-4 col-xg-4 col-md-6 col-sm-6 col-12 pb-4 pb-sm-0 pb-md-0 pb-lg-0 pb-xl-0">
                                <div className="row">
                                    <div className="col-12 d-flex">
                                        <div>
                                            <img className="d-inline d-md-none d-lg-none d-xl-none" src={logo} alt="" />


                                            <h3 className="text-white d-inline d-md-block d-lg-block d-xl-block">NFTi</h3>
                                        </div>


                                    </div>
                                </div>
                                <div className="row mt-4 d-flex text-left">
                                    <div className="col-12 d-flex">

                                        <h4 className="text-white d-none d-md-inline d-lg-inline d-xl-inline">
                                            Discover, Buy, Sell, <br /> Create and <span id="expand"> Expand </span> <br /> Music NFTs™
                                        </h4>
                                        <h4 className="text-white d-inline d-md-none d-lg-none d-xl-none">
                                            The New Creative <br /> Economy.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2 col-xl-2 col-sm-3 py-4 py-sm-0 py-md-0 py-lg-0 py-xl-0 boderApply ">
                                <div className="row ">
                                    <div className="col-12 d-inline d-sm-flex d-md-flex d-lg-flex d-xl-flex">
                                        <h3 className="text-white d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline">stacks</h3>


                                        <article className="faq-accordion1 d-inline d-sm-none d-md-none d-lg-none d-xl-none">
                                            <div className="faq-accordion-title">
                                                <label htmlFor="tgg-title-3">
                                                    <h3 className="text-white">stacks</h3>
                                                    <span className="arrow-icon">
                                                        <img src={search_arrow} className="img-fluid" />
                                                    </span>
                                                </label>
                                            </div>

                                        </article>
                                    </div>
                                </div>
                                <div className=" d-none d-sm-flex d-md-flex d-lg-flex row mt-4 d-xl-flex text-left">
                                    <div className="col-12 text-change d-flex ">
                                        Discover
                                    </div>
                                    <div className="col-12 text-change d-flex my-4 ">
                                        Connect wallet
                                    </div>
                                    <div className="col-12 d-flex text-change ">
                                        Create item
                                    </div>
                                </div>

                                <div id="collapseOne" className="collapse show d-flex d-sm-none d-md-none d-lg-none d-xl-none row mt-4 text-left" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="col-12 text-change d-flex ">
                                        Discover
                                    </div>
                                    <div className="col-12 text-change d-flex my-4 ">
                                        Connect wallet
                                    </div>
                                    <div className="col-12 d-flex text-change ">
                                        Create item
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-12">
                                <article className="faq-accordion">
                                    <div className="faq-accordion-title">
                                        <label htmlFor="tgg-title-3">
                                            <h2>Verified only</h2>
                                            <span className="arrow-icon">
                                                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" className="img-fluid" />
                                            </span>
                                        </label>
                                    </div>

                                </article>
                            </div> */}

                            <div className="col-12 col-md-3 col-lg-2 col-xl-2 col-sm-3 py-4 py-sm-0 py-md-0 py-lg-0 py-xl-0 boderApply">
                                <div className="row ">
                                    <div className="col-12 d-sm-flex d-md-flex d-lg-flex d-xl-flex ">
                                        <h3 className="text-white d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline">Info</h3>






                                        <article className="faq-accordion1 d-inline d-sm-none d-md-none d-lg-none d-xl-none">
                                            <div className="faq-accordion-title">
                                                <label htmlFor="tgg-title-3">
                                                    <h3 className="text-white">Info</h3>
                                                    <span className="arrow-icon">
                                                        <img src={search_arrow} className="img-fluid" />
                                                    </span>
                                                </label>
                                            </div>

                                        </article>
                                    </div>
                                </div>

                                <div className=" d-none d-sm-flex d-md-flex d-lg-flex row mt-4 d-xl-flex text-left">
                                    <div className="col-12 text-change d-flex ">
                                        Download
                                    </div>
                                    <div className="col-12 text-change d-flex my-4 ">
                                        Demos
                                    </div>
                                    <div className="col-12 d-flex text-change ">
                                        Support
                                    </div>
                                </div>

                                <div id="collapseTwo" className="collapse show d-flex d-sm-none d-md-none d-lg-none d-xl-none row mt-4 text-left" aria-labelledby="collapseTwo" data-parent="#accordionExample">
                                    <div className="col-12 text-change d-flex ">
                                        Download
                                    </div>
                                    <div className="col-12 text-change d-flex my-4 ">
                                        Demos
                                    </div>
                                    <div className="col-12 d-flex text-change ">
                                        Support
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-lg-4 col-xl-4 col-md-6 col-sm-7 pt-4 pt-sm-0 pt-md-0 pt-lg-0 pt-xl-0">
                                <div className="row">
                                    <div className="col-12 d-flex">

                                        <h3 className="text-white">Join Newsseltter</h3>
                                    </div>
                                </div>
                                <div className="row my-4 d-flex text-left">
                                    <div className="col-12 px-lg-0 px-xl-0 text-white d-flex justify-content-center">
                                        Subscribe our newsletter to get more free design course and
                                        resource
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-12">
                                        <div className="row  py-1 pr-2 pr-md-4 d-flex justify-content-center">
                                            <div className="col-11 col-md-12 col-lg-12 col-xl-12 border">
                                                <div className="row">



                                                    <div className="col-10 d-flex">
                                                        <form className="form-inline my-2 my-lg-0 my-md-0 mr-2">
                                                            <input
                                                                className="form-control px-lg-0 px-xl-0 mr-sm-2 footerSearchBar "
                                                                type="search"
                                                                placeholder="Enter your email"
                                                                aria-label="Search"
                                                            />
                                                        </form>
                                                    </div>
                                                    <div className="col-2 px-0  text-white  d-flex align-items-center">

                                                        <img src={RightArrowPic} alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="row pt-3 ">
                            <div className="col-lg-7 col-xl-7 col-12 my-3 text-change d-flex px-lg-0 px-xl-0">
                                Copyright © 2021 UI8 LLC. All rights reserved

                            </div>
                            <div className="col-lg-5 col-xl-5 col-12 my-3 text-white d-flex justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-md-start px-lg-0 px-xl-0">
                                We use cookies for better service. &nbsp; <span className="text-primary"> Accept</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
