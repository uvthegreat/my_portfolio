import React from "react";

export default function Experience() {
  return (
    <>
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-heading">
            <h1>Experience</h1>
            <h6>Some of my works</h6>
          </div>
          <div className="timeline">
            <ul>
              <li
                className="date"
                data-date="May 2023-July 2023"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Contributor</h1>
                <p>
                  Participated as an Open-Source Contributor in GirlScript
                  Summer of Code (GSSoC'23) from May to July 2023. Engaged in
                  the open-source program, contributing to projects and gaining
                  valuable experience in collaborative coding.
                </p>
                <br />
                <a
                  href="https://github.com/uvthegreat?tab=achievements&achievement=pull-shark"
                  className="cta"
                >
                  View Work
                </a>
              </li>
              {/* <li
                className="date"
                data-date="Month 2020-Month 2020 | Month 2021-Month 2021"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Designation 2</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusantium magni ex sapiente incidunt at
                  reprehenderit, nulla inventore. Illum, porro aperiam?
                </p>
                <br />
                <a href className="cta">
                  View Work
                </a>
              </li>
              <li
                className="date"
                data-date="Month 2019-Month 2019"
                data-aos="fade-up"
                data-aos-duration="300ms"
              >
                <h1>Designation 3</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusantium magni ex sapiente incidunt at
                  reprehenderit, nulla inventore. Illum, porro aperiam?
                </p>
                <br />
                <a href className="cta">
                  View Project
                </a>
              </li> */}
            </ul>
            <div className="contact-img">
              <img src="images/Group1956.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
