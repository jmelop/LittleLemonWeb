import React from "react";
import "./MenuBanner.css";
import MenuCard from "../Cards/MenuCard";
import GreekSaladImage from "../../assets/greek salad.jpg";
import LemonDessertImage from "../../assets/lemon dessert.jpg";
import BurgerImage from "../../assets/burger.jpg";

const menu = [
  {
    url: GreekSaladImage,
    description: "Greek Salad",
    title: "Greek Salad",
    price: "$8.50",
    resume:
      "The renowned Mediterranean salad with fresh spinach, tomatoes, olives, and our Manchego cheese, topped with crunchy garlic and thyme croutons.",
  },
  {
    url: LemonDessertImage,
    description: "Lemon Dessert",
    title: "Lemon Dessert",
    price: "$4.50",
    resume:
      "The classic lemon tart with a buttery crust, tangy lemon curd, and a dollop of whipped cream, garnished with fresh raspberries and mint leaves.",
  },
  {
    url: BurgerImage,
    description: "Cheeseburger",
    title: "Cheeseburger",
    price: "$9.99",
    resume:
      "The signature cheeseburger with a juicy beef patty, melted cheddar cheese, crisp lettuce, tomatoes, and pickles, served with crunchy onion rings on the side.",
  },
];

export default function MenuBanner() {
  return (
    <section className="">
      <div className="menu-banner-container">
        <div className="left-content">
          <h2>This week specials!</h2>
        </div>
        <div className="right-content">
          <button>Online Menu</button>
        </div>
      </div>
      <div className="card-container">
        {menu.map((item, index) => (
          <MenuCard key={index} meal={item} />
        ))}
      </div>
    </section>
  );
}
