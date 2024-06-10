import React from "react";
import { render, screen } from "@testing-library/react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Confirmation from "../Confirmation";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(() => null),
}));

describe("Confirmation component", () => {
  it("renders with correct content", () => {
    render(<Confirmation />);

    expect(FontAwesomeIcon).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: faCircleCheck,
        size: "3x",
      }),
      {}
    );

    const confirmationText = screen.getByText(
      "Great news! Your reservation is now confirmed."
    );

    expect(confirmationText).toBeInTheDocument();
  });
});
