import React from "react";
import "./Opinions.css";
import ChefImage from "../../assets/chef1.jpg";
import SecondChefImage from "../../assets/chef2.jpg";

export default function Opinions() {
  return (
    <section className="wrapper opinion-block">
      <div className="container">
        <div className="left-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultrices erat non dapibus dictum. Sed vel faucibus nibh, eget
            finibus metus. Suspendisse rutrum nulla libero, sit amet semper
            mauris tempus a. In eleifend eleifend odio non condimentum. Vivamus
            eget tincidunt nulla. Fusce luctus, erat eget mollis efficitur,
            metus massa imperdiet ex, eu pharetra ante ligula eget quam. Nunc
            pretium commodo nulla, ac pulvinar diam dictum et. Nam eget mi a
            turpis condimentum viverra pharetra ac nulla. Duis vitae turpis ut
            magna tempor mollis. Nulla suscipit nisl et turpis dictum, in semper
            enim facilisis. Vivamus lobortis id mi eget venenatis. Etiam
            accumsan felis vel dolor gravida, in venenatis turpis euismod.
            Integer mattis vulputate elit vitae iaculis. Aliquam sagittis orci
            at leo hendrerit, eget varius lectus mollis. Ut bibendum, ligula in
            auctor aliquam, lectus neque interdum dui, id tincidunt enim purus
            in elit.
          </p>
        </div>
        <div>
          <img className="image" alt="Restaurant food chefs" src={ChefImage} />
          <img className="image bottom-image" alt="Restaurant food chefs in the kitchen" src={SecondChefImage} />
        </div>
      </div>
    </section>
  );
}
