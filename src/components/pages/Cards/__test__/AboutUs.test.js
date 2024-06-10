import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUsCard from "../AboutUsCard";

describe("AboutUsCard component", () => {
  const client = {
    name: "John Doe",
    stars: 4,
    comment: "Great service!",
    url: "client-image.jpg",
    description: "Client image",
  };

  it("renders with correct content", () => {
    render(<AboutUsCard client={client} />);
    
    const nameElement = screen.getByText("John Doe");
    const commentElement = screen.getByText(/Great service!/i);
    const imageElement = screen.getByAltText("Client image");

    expect(nameElement).toBeInTheDocument();
    expect(commentElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
