import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <section className="pagex-container">
      <FontAwesomeIcon
        className="icon-text-flex"
        icon={faHelmetSafety}
        size="3x"
      />
      <h2>Page under construction!</h2>
    </section>
  );
}
