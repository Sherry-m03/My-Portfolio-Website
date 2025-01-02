import React from "react";

function About() {
  return (
    <div>
      <div id="about">
        <div className="about-head">
          <h2>About Me</h2>
        </div>
        <div className="about-info">
          <div>
            <img src="woman-img.png" alt="" />
          </div>
          <div>
            <span>
              Hi, I’m Shreya, a dedicated full-stack web developer passionate
              about transforming ideas into intuitive and high-performing
              digital solutions. I specialize in creating user-friendly
              applications using technologies like JavaScript, Node.js, React,
              and PostgreSQL. With a strong foundation built through hands-on
              projects, I’ve honed my skills in front-end and back-end
              development, responsive design, and API integration. My focus is
              on delivering seamless functionality and engaging user
              experiences, and I’m always excited to learn and implement the
              latest industry practices.
            </span>
            <br></br>
            <br></br>
            <span>
              Beyond coding, I enjoy exploring spoken languages like Korean and
              Thai, reflecting my curiosity and passion for continuous learning.
              I believe that creativity and problem-solving go hand in hand, and
              I strive to bring both to every project I undertake. With a
              Bachelor’s degree from IIIT Naya Raipur and a proactive approach
              to learning, I’m eager to contribute my skills to meaningful
              projects, collaborate with innovative teams, and grow as a
              developer. Let’s connect and build something amazing together!
            </span>
          </div>
        </div>
      </div>
      <div className="quote1">
        <h2>"Coding with Creativity and Curiosity"</h2>
      </div>
    </div>
  );
}

export default About;
