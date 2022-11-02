import React from "react";
import FaqList from "../components/FaqList";
import Footer from "../components/Footer";
import "./Home.css";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7 intro-section-desc">
              <h1>You got package?</h1>
              <p>
                The Most Versatile And Efficient Logistics Service In Nigeria.
                Best Drivers Best Prices Parcel Tracking
              </p>

              <div className="intro-section-btns">
                <Link to="/signUp">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 intro-section-img" intro->
              <img src="./images/intro.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-section">
        <div className="container">
          <p
            className="text-center"
            style={{ color: "#0c6a52", fontSize: "14px" }}
          >
            QUALITY FEATURES
          </p>
          <h2 className="text-center" style={{ fontSize: "32px" }}>
            Meet exciting feature of app
          </h2>

          <div className="feature-section-items">
            <div className="feature">
              <img src="./images/vector.svg" />
              <h2>Seamless Pickup Requests</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>

            <div className="feature">
              <img src="./images/customize.svg" />
              <h2>24/7 Messaging Service</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>

            <div className="feature">
              <img src="./images/quality.svg" />
              <h2>Multi-Lingual Function</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-feature-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 core-feature-section-img">
              <img src="./images/core.png" />
            </div>

            <div className="col-md-6">
              <p style={{ color: "#0c6a52", fontSize: "14px" }}>SERVICES</p>
              <h2 style={{ color: "#0F2137", fontSize: "42px" }}>
                Quality riders and partners ready to deliver
              </h2>
              <div className="core-feature">
                <div>
                  <img src="./images/smart.svg" />
                </div>
                <div>
                  <h2>Logistics For Any Business Size</h2>
                  <p>
                    With Pilots and G-Partners all over Lagos, there will always
                    be one nearby to pick up your parcels and more.
                  </p>
                </div>
              </div>

              <div className="core-feature">
                <div>
                  <img src="./images/secure.svg" />
                </div>
                <div>
                  <h2>Schedule Pickup</h2>
                  <p>
                    Need to have your item picked up at a specific time? We’ve
                    got that covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-features-section" id="features">
        <div className="container">
          <p
            style={{ color: "#0c6a52", fontSize: "14px" }}
            className="text-center"
          >
            CORE FEATURES
          </p>
          <h2
            style={{ color: "#000", fontSize: "42px" }}
            className="text-center"
          >
            Meet exciting feature of app
          </h2>

          <div className="quality-features">
            <div className="core-feature core">
              <div>
                <img src="./images/sf.svg" />
              </div>
              <div>
                <h2>Seamless Pickup Requests</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/fp.svg" />
              </div>
              <div>
                <h2>24/7 Messaging Service</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/uc.svg" />
              </div>
              <div>
                <h2>Multi-Lingual Function</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/u-.svg" />
              </div>
              <div>
                <h2>Trained & Trusted Drivers</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/bp.svg" />
              </div>
              <div>
                <h2>Logistics For Any Business Size</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/cs.svg" />
              </div>
              <div>
                <h2>
                  Detailed Descriptive Option For Optimum Effective Pricing
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-section" id="business">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: "#0c6a52", fontSize: "14px" }}>PARTNER</p>
              <h2 style={{ color: "#000", fontSize: "42px", width: "80%" }}>
                Got a bike?
              </h2>
              <p
                style={{
                  color: "#000",
                  fontSize: "17px",
                  margin: "1rem 0",
                  lineHeight: "2.5rem",
                  width: "80%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/signUp">
                <button className="getStarted-btn">Partner With Us</button>
              </Link>
            </div>
            <div
              className="col-md-6 getStarted"
              style={{ position: "relative" }}
            >
              <img src="./images/getstarted.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="function-section">
        <div className="container">
          <p className="text-center">WHATS THE FUNCTION</p>
          <h2 className="text-center">Let's see how it works</h2>
          <div className="functions">
            <div className="function">
              <h2 className="number">01</h2>

              <div className="function-des">
                <h2>Sign up on the app</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">02</h2>

              <div className="function-des">
                <h2>Carefully enter pickup details</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">03</h2>

              <div className="function-des">
                <h2>Place your service order to be delivered</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">04</h2>

              <div className="function-des">
                <h2>The system provides you the service bill.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-section" id="buga-app">
        <div className="container">
          <div className="row">
            <div className="col-md-6 payment-section-img">
              <img src="./images/secure-payment.png" />
            </div>
            <div className="col-md-6">
              <p style={{ color: "#0c6a52", fontSize: "14px" }}>BUGA APP</p>
              <h2
                style={{
                  color: "#000",
                  fontSize: "42px",
                  width: "80%",
                  fontWeight: "bold",
                }}
              >
                DOWNLOAD OUR MOBILE APP NOW
              </h2>

              <div>
                <p
                  style={{
                    color: "#000",
                    fontSize: "20px",
                  }}
                >
                  For Best Delivery Services
                </p>
                <button className="getStarted-btn">
                  Get App
                  <HiOutlineDownload
                    style={{
                      fontSize: "1.5rem",
                      color: "#fff",
                      fontWeight: "bold",
                      marginLeft: ".5rem",
                    }}
                  />
                </button>
                <br />
                <div className="download">
                  <img src="./images/android.svg" />
                  <img src="./images/ios.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqList />
      <Footer />
    </>
  );
}

export default Home;
