import React from "react";

export default function Achievements() {
  return (
    <>
      <section className="achievements" id="achievements">
        <div className="container">
          <div className="achievements-img">
            <img src="assets/images/Rectangle5651.svg" alt="" />
          </div>
          <div className="section-heading">
            <h1>Achievements</h1>
            <h6>Some honourable mentions</h6>
          </div>
          <div
            className="my-skills"
            data-aos="fade-right"
            data-aos-delay="100ms"
          >
            <div
              className="skill"
              data-date="Colab"
              data-aos="fade-right"
              data-aos-delay="300ms"
            >
              <h3>Ideathon Runner Up</h3>
              <p>
                1 st Runner Up in Hackathon "Ideathon 2.0" organized by
                Scriptogen club of Chandigarh University.
              </p>
              <br />
              <a
                href="https://drive.google.com/file/d/1j0ksMphA0FiUvFlpDasgwqa4gR8qVUL9/view"
                className="cta"
              >
                Certificate
              </a>
            </div>
            <div
              className="skill"
              data-date="Hard-Work"
              data-aos="fade-right"
              data-aos-delay="600ms"
            >
              <h3>NPTEL Star Performer</h3>
              <p>
                Secured postion in top 2% among 2157 candidates enrolled in
                Social Networks NPTEL course.
              </p>
              <br />
              <a
                href="https://www.linkedin.com/posts/utkarsh-vishwakarma_socialnetworks-top2percent-learningjourney-activity-7134903173697130496-iW_a?utm_source=share&utm_medium=member_desktop"
                className="cta"
              >
                Certificate
              </a>
            </div>
            <div
              className="skill"
              data-date="Code"
              data-aos="fade-right"
              data-aos-delay="900ms"
            >
              <h3>Coding Ninja</h3>
              <p>
                Ranked 145th in Weekly Contest 122, showcasing proficiency in
                competitive challenges. A testament to skill and dedication,
                achieving notable standing among peers.
              </p>
              <br />
              {/* <a href=" " className="cta">
                View Project/Certificate
              </a> */}
            </div>
            {/* <div
              className="skill"
              data-date="Title"
              data-aos="fade-right"
              data-aos-delay="1200ms"
            >
              <h3>Achievement 4</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusantium magni ex sapiente incidunt at
                reprehenderit, nulla inventore. Illum, porro aperiam?
              </p>
              <br />
              <a href className="cta">
                View Project/Certificate
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
