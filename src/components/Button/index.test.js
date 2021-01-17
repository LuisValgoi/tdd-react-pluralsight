import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Suite", () => {
  test("renders Button text", () => {
    render(<Button />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
