import React from "react";

const TourCard = ({ id, title, desc, place, length, price, img, date }) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{desc}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {place}
          </p>
          <p>{length}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
