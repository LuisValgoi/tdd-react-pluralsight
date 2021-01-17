import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Suite", () => {
  beforeEach(() => {
    render(<Button />);
  });

  test("renders Button", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
