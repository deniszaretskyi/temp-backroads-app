import React from "react";
import Title from "./Title";
import { servicesInfo } from "../data/data";
const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title frontText={"our"} backText={"services"} />
        <div className="section-center services-center">
          {servicesInfo.map((item) => {
            const { id, title, desc, i } = item;
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={i}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
