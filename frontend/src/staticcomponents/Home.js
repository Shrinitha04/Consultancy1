import React, { useState } from "react";
import {Carousel} from 'react-bootstrap';
import "./Home.css";


function Home() {
  return (
    <div>
      <br></br>
      <br></br>

      <div className="img">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./wallp1.jpg"
            alt="First slide"
            style={{ width: "100%", height: "50%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./wallp.jpg"
            alt="First slide"
            style={{ width: "100%", height: "50%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./wallpap.png"
            alt="First slide"
            style={{ width: "100%", height: "50%" }}
          />
        </Carousel.Item>
   
      </Carousel>
    </div>

      <div className="container mt-5">
        <h3>Explore us!!</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <a href="./products">
                <img
                  src="./walpp1.jpg"
                  className="card-img-top"
                  alt="Image 1"
                  style={{ height: 300, width: 325 }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Shop here</b>
                </h5>
                <p className="card-text">Click me to visit Ur favourables</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="./about">
                <img
                  src="./walpp2.jpg"
                  className="card-img-top"
                  alt="Image 2"
                  style={{ height: 300, width: 335 }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Wanna know about us</b>
                </h5>
                <p className="card-text">Just ping me....</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="./walpp3.jpg"
                className="card-img-top"
                alt="Image 3"
                style={{ height: 300, width: 335 }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Connect with us</b>
                </h5>
                <p className="card-text">
                  Awaiting to clear your Queries and do some serives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <div className="img">
        <a href="/products">
          <img
            src="./frontgif.gif"
            alt="MyImage"
            style={{ width: "100%", height: "auto" }} 
          />
        </a>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>

      
    </div>
  );
}

export default Home;
