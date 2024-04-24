import React from "react";

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default function Footer() {
  return (
    <>
      <footer className="footer-class">
        <div className="up" id="up" onClick={scrollToTop}>
          <img src="assets/images/arrow_up_icon.svg" alt="" className="i" />
        </div>
        <div className="footer-content">
          <img src="Logo.png" onClick={scrollToTop} alt="" srcSet="" />
          <p>© Utkarsh Vishwakrma</p>
        </div>
      </footer>
    </>
  );
}
