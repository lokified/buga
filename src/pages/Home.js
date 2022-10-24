import React from "react";
import FaqList from "../components/FaqList";
import Footer from "../components/Footer";
import TestimonyList from "../components/TestimonyList";
import "./Home.css";

function Home() {
  return (
    <>
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7 intro-section-desc">
              <h1>Experience your ultimate mobile application</h1>
              <p>
                Get your blood tests delivered at let home collect sample from
                the victory of the managements that supplies best design system
                guidelines ever.
              </p>

              <div className="intro-section-btns">
                <button>Get Started</button>

                <button style={{ alignItems: "center"}}>
                  <i
                    class="fa-solid fa-circle-play"
                    style={{
                      marginRight: ".5rem",
                      fontSize: "1.5rem",
                      paddingTop: ".8rem",
                    }}
                  ></i>
                  <span>Watch Video</span>
                </button>
              </div>

              <div className="intro-section-sponsor">
                Sponsored by:
                <div className="intro-section-sponsor-imgs">
                  <img src="./images/paypal.svg" alt="" />
                  <img src="./images/google.svg" alt="" />
                  <img src="./images/dropbox.svg" alt="" />
                </div>
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
            style={{ color: "#244886", fontSize: "14px" }}
          >
            QUALITY FEATURES
          </p>
          <h2 className="text-center" style={{ fontSize: "32px" }}>
            Meet exciting feature of app
          </h2>

          <div className="feature-section-items">
            <div className="feature">
              <img src="./images/vector.svg" />
              <h2>Vector Editing</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>

            <div className="feature">
              <img src="./images/customize.svg" />
              <h2>Customize & Monitoring</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>

            <div className="feature">
              <img src="./images/quality.svg" />
              <h2>Quality & Short-period</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
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
              <p style={{ color: "#244886", fontSize: "14px" }}>
                CORE FEATURES
              </p>
              <h2 style={{ color: "#0F2137", fontSize: "42px" }}>
                Smart Jackpots that you may love this anytime & anywhere
              </h2>
              <div className="core-feature">
                <div>
                  <img src="./images/smart.svg" />
                </div>
                <div>
                  <h2>Smart Features</h2>
                  <p>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </p>
                </div>
              </div>

              <div className="core-feature">
                <div>
                  <img src="./images/secure.svg" />
                </div>
                <div>
                  <h2>Secure Contents</h2>
                  <p>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-features-section">
        <div className="container">
          <p
            style={{ color: "#244886", fontSize: "14px" }}
            className="text-center"
          >
            CORE FEATURES
          </p>
          <h2
            style={{ color: "#0F2137", fontSize: "42px" }}
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
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/fp.svg" />
              </div>
              <div>
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/uc.svg" />
              </div>
              <div>
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/u-.svg" />
              </div>
              <div>
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/bp.svg" />
              </div>
              <div>
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>

            <div className="core-feature core">
              <div>
                <img src="./images/cs.svg" />
              </div>
              <div>
                <h2>Smart Features</h2>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: "#244886", fontSize: "14px" }}>
                CORE FEATURES
              </p>
              <h2 style={{ color: "#0F2137", fontSize: "42px", width: "80%" }}>
                Smart Jackpots that you may love this anytime & anywhere
              </h2>
              <p
                style={{
                  color: "#02073E",
                  fontSize: "17px",
                  margin: "1rem 0",
                  lineHeight: "2.5rem",
                  width: "80%",
                }}
              >
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </p>

              <button className="getStarted-btn">Get Started</button>
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
                <h2>Set disbursement Instructions</h2>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">02</h2>

              <div className="function-des">
                <h2>Assembly retrieves funds from your account</h2>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">03</h2>

              <div className="function-des">
                <h2>Assembly initiates disbursement</h2>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>

            <div className="function">
              <h2 className="number">04</h2>

              <div className="function-des">
                <h2>Customer receives funds payment</h2>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="testimonial-section">
        <div>
          <p
            className="text-center"
            style={{ color: "#244886", fontSize: "14px" }}
          >
            TESTIMONIAL
          </p>
          <h2
            className="text-center"
            style={{ color: "#0F2137", fontSize: "32px" }}
          >
            Meet Client Satisfaction
          </h2>

          <TestimonyList />
        </div>
      </section>

      <section className="payment-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 payment-section-img">
              <img src="./images/secure-payment.png" />
            </div>
            <div className="col-md-6">
              <p style={{ color: "#244886", fontSize: "14px" }}>
                PAYMENT SECURITY
              </p>
              <h2 style={{ color: "#0F2137", fontSize: "42px", width: "80%" }}>
                Secure Payment Transaction System with #1 Ranking
              </h2>
              <p
                style={{
                  color: "#02073E",
                  fontSize: "17px",
                  margin: "1rem 0",
                  lineHeight: "2.5rem",
                  width: "80%",
                }}
              >
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </p>

              <button className="getStarted-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="signup-section">
        <div className="container">
          <p className="text-center">WHATS THE FUNCTION</p>
          <h2 className="text-center">Let's see how it works</h2>
          <div className="container signup">
            <div className="freeplan">
              <h2>Free Plan</h2>
              <p>For Small teams or office</p>
              <div className="freeplan-wrapper">
                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Ultimate access to all course, exercises and assessments
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Free access for all kind of exercise corrections with
                    downloads.
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Total assessment corrections with free download access
                    system
                  </p>
                </div>

                <div className="wrapper" style={{ color: "#98b2df" }}>
                  <i
                    style={{ color: "#98b2df" }}
                    className="fa-solid fa-circle-xmark"
                  ></i>
                  <p>
                    Unlimited download of courses on the mobile app contents
                  </p>
                </div>

                <div className="wrapper" style={{ color: "#98b2df" }}>
                  <i
                    style={{ color: "#98b2df" }}
                    className="fa-solid fa-circle-xmark"
                  ></i>
                  <p>Download and print courses and exercises in PDF </p>
                </div>

                <div className="text-center">
                  <button className="getStarted-btn free-btn">
                    signup Now
                  </button>
                </div>
              </div>
            </div>

            <div className="premium">
              <span
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#EF9E48",
                  padding: ".2rem",
                  fontSize: "14px",
                  borderRadius: ".2rem",
                  position: "absolute",
                  top: "30px",
                  left: "50px",
                }}
              >
                Recommended
              </span>

              <div className="recomended">
                <div>
                  <h2>Premium</h2>
                  <p>For startup enterprise</p>
                </div>

                <div>
                  <p>Starting from</p>
                  <h2>$29.99/mo</h2>
                </div>
              </div>

              <div className="freeplan-wrapper">
                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Ultimate access to all course, exercises and assessments
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Free access for all kind of exercise corrections with
                    downloads.
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>
                  <p>
                    Total assessment corrections with free download access
                    system
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>

                  <p>
                    Unlimited download of courses on the mobile app contents
                  </p>
                </div>

                <div className="wrapper">
                  <i class="fa-solid fa-circle-check"></i>

                  <p>Download and print courses and exercises in PDF </p>
                </div>

                <div className="text-center">
                  <button className="getStarted-btn premium-btn">
                    signup Now
                  </button>
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
