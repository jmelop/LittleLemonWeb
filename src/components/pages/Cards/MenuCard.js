import React from "react";
import "./MenuCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

export default function MenuCard({ meal }) {
  return (
    <article className="card">
      <div>
        <img src={meal.url} alt={meal.description} />
      </div>
      <div className="card-header">
        <h1>{meal.title}</h1>
        <p>{meal.price}</p>
      </div>
      <div className="card-body">
        <p>{meal.resume}</p>
        <Link className="order">
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
}
