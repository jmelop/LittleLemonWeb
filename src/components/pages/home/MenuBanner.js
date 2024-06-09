import React from "react";
import "./MenuBanner.css";

export default function MenuBanner() {
  return (
    <section className="">
      <div className="menu-banner-container">
        <div className="left-content">
          <h1>This week specials!</h1>
        </div>
        <div className="right-content">
          <button>Online Menu</button>
        </div>
      </div>
    </section>
  );
}
