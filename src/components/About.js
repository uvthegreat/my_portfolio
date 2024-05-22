import React from "react";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="profile-img">
            <img src="assets/profile2.png" />
          </div>
          <div className="skills-img">
            <img src="assets/images/blackball.svg" alt="" />
          </div>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Know Me!!</h6>
            </div>
            <br />
            <h3> Hi! This is Utkarsh Vishwakarma </h3>
            <br />
            <p>
              Engineering student with skills in C++, Python, Java, HTML5, CSS,
              JS, React JS, and Data Structures/Algorithms. Quick learner, team
              player with strong communication, eager to contribute to projects.
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1zDKw2LmymH-3fauQONeZq0xnE4L7_yr3/view?usp=sharing"
                target="_blank"
                className="cta"
              >
                Checkout my Resume
              </a>
            </p>
            <br />
            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a
                    href="mailto:utkarshvishwakarma1411@gmail.com"
                    className="icon-link"
                  >
                    <img src="assets/social/gmail.svg" alt="" srcet="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/utkarsh-vishwakarma-383263231/"
                    className="icon-link"
                  >
                    <img src="assets/social/linkedin.svg" alt="" srcSet="" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/uvthegreat" className="icon-link">
                    <img src="assets/social/github.svg" alt="" srcSet="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_uvthegreat_"
                    className="icon-link"
                  >
                    <img src="assets/social/x-social.svg" alt="" srcSet="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
