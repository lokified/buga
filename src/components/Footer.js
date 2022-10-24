import React from 'react';
import "./Footer.css";

function Footer() {
    return (
      <>
        <section>
          <footer>
            <div className="container footer-section">
              <div className="footer-links">
                <h2>About Us</h2>
                <p>Support Center</p>
                <p>Customer Support</p>
                <p>About Us</p>
                <p>Copyright</p>
                <p>Popular Campaign</p>
              </div>

              <div className="footer-links">
                <h2>Our Information</h2>
                <p>Return Policy</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Site Map</p>
                <p>Store Hours</p>
              </div>

              <div className="footer-links">
                <h2>My Account</h2>
                <p>Press inquiries</p>
                <p>Social Media</p>
                <p>directories</p>
                <p>Images & B-roll</p>
                <p>Permissions</p>
              </div>

              <div className="footer-links">
                <h2>Policy</h2>
                <p>Application Security</p>
                <p>Software Principles</p>
                <p>Unwanted software policy</p>
                <p>Responsible supply chain</p>
              </div>
            </div>
            <p className='text-center' style={{color: "#343D48", paddingBottom: "1rem"}}>All right reserved - Design & Developed byRedQ, Inc</p>
          </footer>
        </section>
      </>
    );
}

export default Footer;