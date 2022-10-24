import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [scroll, setScroll] = useState(0);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(true);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(1);
    } else {
      setScroll(0);
    }
  });

  return (
    <>
      <nav
        style={{
          backgroundColor: scroll == 1 ? "white" : "transparent",
          boxShadow: scroll == 1 ? "rgba(0, 0, 0, 0.08) 0px 4px 12px" : "none",
        }}
      >
        <div className="container nav-bar">
          <div>
            <img
              src={scroll == 1 ? "./images/dark-logo.svg" : "./images/logo.svg"}
              style={{
                marginTop: ".5rem",
              }}
              className="logo"
            />
          </div>
          <div>
            <ul
              className={
                scroll == 1
                  ? "scroll-nav-links "
                  : "nav-links " && click
                  ? "scroll-nav-links active "
                  : "scroll-nav-links" && click
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              <i className="fa-solid fa-xmark" onClick={closeMobileMenu}></i>

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#feature">Features</a>
              </li>

              <li>
                <a href="#testimonial">Testimonial</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>

              <div className="socials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-brands fa-google-play"></i>
              </div>
            </ul>
          </div>

          <div>
            <button className={scroll == 1 ? "scroll-nav-btn" : "nav-btn"}>
              Get Started
            </button>

            <button onClick={handleClick} className="drop-btn">
              <i className="fa-solid fa-bars "></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
