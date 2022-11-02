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
          backgroundColor: scroll === 1 ? "#fff" : "#0c6a52",
          boxShadow: scroll === 1 ? "rgba(0, 0, 0, 0.08) 0px 4px 12px" : "none",
        }}
      >
        <div className="container nav-bar">
          <div className="nav-logo">
            <img
              src={
                scroll === 1
                  ? "./images/logo-yellow.png"
                  : "./images/logo-light.png"
              }
            />
          </div>
          <div>
            <ul
              className={
                click
                  ? "nav-links active"
                  : scroll === 1
                  ? "scroll-nav-links"
                  : "nav-links"
              }
            >
              <i className="fa-solid fa-xmark" onClick={closeMobileMenu}></i>

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#buga-app">BugaApp</a>
              </li>

              <li>
                <a href="#features">Features</a>
              </li>

              <li>
                <a href="#business">Business</a>
              </li>

              <li>
                <a href="#faq">Faq</a>
              </li>

              <div className="socials">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-discord"></i>
                <i className="fa-brands fa-google-play"></i>
              </div>
            </ul>
          </div>

          <div>
            <button onClick={handleClick} className="drop-btn">
              <i
                className="fa-solid fa-bars"
                style={{
                  color: scroll === 1 ? "#0c6a52" : "#fff",
                }}
              ></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
