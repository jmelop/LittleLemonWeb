import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Confirmation.css";

export default function Confirmation() {
  return (
    <section className="confirmation-container">
      <FontAwesomeIcon
        className="icon-text-flex"
        icon={faCircleCheck}
        size="3x"
      />
      <h2>Great news! Your reservation is now confirmed.</h2>
    </section>
  );
}
