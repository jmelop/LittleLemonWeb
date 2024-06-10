import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuCard from "../MenuCard";

describe("MenuCard component", () => {
  const meal = {
    title: "Delicious Meal",
    price: "$10.99",
    resume: "This is a delicious meal description.",
    url: "meal-image.jpg",
    description: "Delicious meal image",
  };

  it("renders with correct content", () => {
    render(
      <MemoryRouter>
        <MenuCard meal={meal} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("Delicious Meal");
    const priceElement = screen.getByText("$10.99");
    const resumeElement = screen.getByText(
      "This is a delicious meal description."
    );

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(resumeElement).toBeInTheDocument();
  });
});
