import React from "react";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <h1>Portfolio</h1>
            <h6>Some of my recent work</h6>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-in"
            data-aos-duration="300ms"
          >
            <div className="portfolio-img has-margin-right">
              <img src="assets/images/cuprep.png" alt="" />
            </div>
            <div className="portfolio-description">
              <h6>Learn</h6>
              <h1>E-learning Website</h1>
              <p>
                Developed an E-learning website Using HTML, CSS, and JavaScript.
                Implemented user-Authentication and responsive design to ensure
                seamless accessibility across devices.
              </p>
              <a
                href="https://github.com/uvthegreat/E-learning-web-app"
                className="cta"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-in"
            data-aos-duration="300ms"
          >
            <div className="portfolio-description has-margin-right">
              <h6>Decode</h6>
              <h1>Huffman Coding</h1>
              <p>
                Implemented Huffman coding algorithm in C++, utilizing STL
                priority queue and binary tree. Achieved efficient data
                compression by converting strings to compressed binary forms.
              </p>
              <a
                href="https://github.com/uvthegreat/huffman-coding"
                className="cta"
              >
                View Project
              </a>
            </div>
            <div className="portfolio-img has-margin-left">
              <img src="assets/images/huffman.png" alt="" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-in"
            data-aos-duration="300ms"
          >
            <div className="portfolio-img has-margin-right">
              <img src="assets/images/quant.png" alt="" />
            </div>
            <div className="portfolio-description">
              <h6>Think</h6>
              <h1>Quant Solver</h1>
              <p>
                Collaborated with a peer to develop an aptitude solver web app,
                demonstrating creativity in idea generation. Utilized React.js
                and Tailwind CSS for implementation.
              </p>
              <a
                href="https://github.com/uvthegreat/Aptitude-solver"
                className="cta"
              >
                View Project
              </a>
            </div>
          </div>
          <a
            href="https://github.com/uvthegreat?tab=repositories"
            className="view-more-project"
          >
            Veiw More
          </a>
          <div className="experience-img">
            <img src="assets/images/Group1949.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
