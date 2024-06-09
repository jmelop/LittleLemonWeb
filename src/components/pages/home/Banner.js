import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/restaurant-food.jpg";

export default function Banner() {
  return (
    <section className="wrapper banner-block">
      <div className="container">
        <div className="block-left">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reservation">Reserve a table</button>
        </div>
        <img className="image" alt="Restaurant food" src={BannerImage} />
      </div>
    </section>
  );
}
