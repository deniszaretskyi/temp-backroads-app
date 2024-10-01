import React from "react";
import Title from "./Title";
import TourCard from "./TourCard";
import { tours } from "../data/data";

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title frontText={"Featured"} backText={"Tours"} />

        <div className="section-center featured-center">
          {tours.map((item) => {
            const { id } = item;
            return <TourCard key={id} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
