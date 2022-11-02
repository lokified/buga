import React from 'react';
import Footer from '../components/Footer';
import "./SignUp.css"

function SignUp() {
    return (
      <>
        <section>
          <div className="container sign-up-section">
            <div
              style={{
                width: "40%",
                marginTop: "3rem",
                color: "#0c6a52",
                fontWeight: "bold",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem"
                }}
              >
                SignUp To Join Our List Of Riders
              </p>

              <img src="./images/corier.jpg" className="img-fluid" />
            </div>

            <div
              style={{
                marginTop: "4rem",
              }}
            >
              <form>
                <div className="driver-info-section">
                  <input type="text" placeholder="Username" />
                  <input type="text" placeholder="Email" />
                </div>

                <div className="driver-address-section">
                  <input type="text" placeholder="Phone number" />
                  <input type="text" placeholder="Address" />
                </div>

                <div className="driver-family-section">
                  <input type="text" placeholder="Gender" />
                  <input type="text" placeholder="Marital Status" />
                </div>

                <div className="driver-vehicle-section">
                  <input type="text" placeholder="State" />
                  <input type="text" placeholder="Vehicle Type" />
                  <input type="text" placeholder="Drivers' Licence" />
                  <input type="text" placeholder="Nipost Option" />
                </div>

                <div className="driver-signup-btn">
                  <button>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}

export default SignUp;