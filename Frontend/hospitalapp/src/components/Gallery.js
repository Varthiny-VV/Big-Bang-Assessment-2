import React from "react";
import './Gallery.css';
import Home from "./Home";


function Gallery() {
    return(
        <div className="galleryBackground">
            
            <section class="product" id="products">
        <div class="container">
            <div class="row py-5">
                <div class="col-lg-5 m-auto text-center">
                    <h1>Gallery</h1>
                    {/* <h6 style="color:orangered;">Blossom Love</h6> */}
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/room1.jpg'} class="img-fluid" alt=""  />
                        </div>
                    </div>
                    <h6>Rooms For Patients</h6>
                    

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/cath_lab.jpg'} class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Cath Laboratory</h6>
                   

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/platinum_wing.jpg'} class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Platinum Wing</h6>
                  

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/opd.jpg'} class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>OPD Area</h6>
                    

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/reception.jpg'} class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Reception</h6>
                    

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/parking.jpg'} class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Parking</h6>
                    
                </div>
            </div>
            
        </div>
    </section>
        </div>

    );
    }  
export default Gallery;












<section class="product" id="products">
        <div class="container">
            <div class="row py-5">
                <div class="col-lg-5 m-auto text-center">
                    <h1>Latest Products</h1>
                    <h6 style="color:orangered;">Blossom Love</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="./images/FloralPic1.jpg" class="img-fluid" alt=""  />
                        </div>
                    </div>
                    <h6>Flower Pot</h6>
                    <p>$29.99</p>

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="./images/FloralPic2.jpg "  class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Flower Pot</h6>
                    <p>$39.99</p>

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="./images/FloralPic3.jpg" class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Flower Pot</h6>
                    <p>$49.99</p>

                </div>
                <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="./images/FloralPic4.jpg" class="img-fluid" alt="" />
                        </div>
                    </div>
                    <h6>Flower Pot</h6>
                    <p>$59.99</p>

                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 text-center m-auto">
                    <button class="btn1">Click here for more blossom love</button>
                </div>
            </div>

        </div>
    </section>