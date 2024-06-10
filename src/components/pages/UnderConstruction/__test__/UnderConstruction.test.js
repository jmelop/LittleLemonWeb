import React from "react";
import { render, screen } from "@testing-library/react";
import UnderConstruction from "../UnderConstruction";

describe("UnderConstruction component", () => {
  it("renders with correct content", () => {
    render(<UnderConstruction />);
    
    const textElement = screen.getByText("Page under construction!");
    expect(textElement).toBeInTheDocument();
  });
});
