import React from "react";
import "./AboutUsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function AboutUsCard({ client }) {
  const getStarts = (stars) => {
    let content = [];
    for (let i = 1; i <= stars; i++) {
      content.push(
        <li>
          {" "}
          <FontAwesomeIcon icon={faStar} size="xs" />
        </li>
      );
    }
    return content;
  };

  return (
    <article className="about-card">
      <div>
        <img src={client.url} alt={client.description} />
      </div>
      <div className="about-card-header">
        <h2>{client.name}</h2>
      </div>
      <div className="about-card-header">
        <ul>{getStarts(client.stars)}</ul>
      </div>
      <div className="about-card-body">
        <p>"{client.comment}"</p>
      </div>
    </article>
  );
}
