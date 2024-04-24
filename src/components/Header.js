import React from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  // disable scrolling while menu is open
  if (isActive) {
    disableScrolling();
  } else {
    enableScrolling();
  }

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  return (
    <>
      <section className="header">
        <div className="left-circ">
          <img src="assets/images/Group1953.svg" alt="" />
        </div>
        <div className="circle-img">
          <img src="assets/images/Group1951.svg" alt="" />
        </div>
        <div
          className={isActive ? "menu-toggler open" : "menu-toggler"}
          id="hamburger-menu"
          onClick={ToggleClass}
        >
          <div className="bar half start" />
          <div className="bar" />
          <div className="bar half end" />
        </div>
        <nav
          className={isActive ? "top-nav open" : "top-nav"}
          id="navigation"
          onClick={ToggleClass}
        >
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={ToggleClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="nav-link" onClick={ToggleClass}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="achievements"
                className="nav-link"
                onClick={ToggleClass}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link to="portfolio" className="nav-link" onClick={ToggleClass}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="experience" className="nav-link" onClick={ToggleClass}>
                Experience
              </Link>
            </li>
          </ul>
        </nav>
        <div className="landing-text">
          <h1>Hi I am, Utkarsh</h1>
          <h6>CS Student</h6>
          <div className="scrolldown">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    </>
  );
}

// let menu = document.getElementById("hamburger-menu");
// let topNav = document.getElementById("navigation");

// function openMenu() {
//   menu.classList.toggle("open");
//   topNav.classList.toggle("open");
// }
