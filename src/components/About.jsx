import React from "react";
import aboutusImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <div className="section-center about-center">
          <Title frontText={"about"} backText={"us"} />
          <div className="about-img">
            <img src={aboutusImg} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
