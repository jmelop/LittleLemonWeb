import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Reservation from "../Reservation";

describe("Reservation component", () => {
  it("renders with correct content", () => {
    render(<Reservation />);

    const emailInput = screen.getByLabelText("Email:");
    const phoneInput = screen.getByLabelText("Phone:");
    const dateInput = screen.getByLabelText("Date:");
    const timeSelect = screen.getByLabelText("Time:");
    const guestsInput = screen.getByLabelText("Number of guests:");
    const submitButton = screen.getByText("Make your reservation");

    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("allows users to fill out the form and submit", () => {
    render(<Reservation />);

    const emailInput = screen.getByLabelText("Email:");
    const phoneInput = screen.getByLabelText("Phone:");
    const dateInput = screen.getByLabelText("Date:");
    const timeSelect = screen.getByLabelText("Time:");
    const guestsInput = screen.getByLabelText("Number of guests:");
    const submitButton = screen.getByText("Make your reservation");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
    fireEvent.change(dateInput, { target: { value: "2024-06-20" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });

    fireEvent.click(submitButton);

    const confirmationText = screen.getByText(
      "Great news! Your reservation is now confirmed."
    );

    expect(confirmationText).toBeInTheDocument();
  });
});
