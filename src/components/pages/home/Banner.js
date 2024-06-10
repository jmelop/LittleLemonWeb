import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/restaurant-food.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="wrapper banner-block">
      <div className="container">
        <div className="block-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="reservation" to={"/reservation"}>
            Reserve a table
          </Link>
        </div>
        <img className="image" alt="Restaurant food" src={BannerImage} />
      </div>
    </section>
  );
}
