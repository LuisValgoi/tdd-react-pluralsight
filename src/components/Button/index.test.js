import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Suite", () => {
  test("renders Button text", () => {
    render(<Button />);
    const linkElement = screen.getByText(/Button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
