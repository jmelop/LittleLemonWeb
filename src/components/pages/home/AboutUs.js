import React from "react";
import "./AboutUs.css";
import AboutUsCard from "../Cards/AboutUsCard";
import FirstClient from "../../assets/client1.jpg";
import SecondClient from "../../assets/client2.jpg";
import ThirdClient from "../../assets/client3.jpg";
import FourthClient from "../../assets/client4.jpg";

const clients = [
  {
    url: FirstClient,
    description: "Restaurant Client",
    name: "Valeria Estrada",
    stars: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    url: SecondClient,
    description: "Restaurant Client",
    name: "Diego Márquez",
    stars: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    url: ThirdClient,
    description: "Restaurant Client",
    name: "Sofía Torres",
    stars: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    url: FourthClient,
    description: "Restaurant Client",
    name: "Lucas Fernández",
    stars: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function AboutUs() {
  return (
    <section className="block">
      <div className="about-section">
        <div className="title-container">
          <h2>What people say about us!</h2>
        </div>
        <div className="about-container">
          {clients.map((client, index) => (
            <div key={index}>
              <AboutUsCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
