import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Suite", () => {
  beforeEach(() => {
    render(<Button />);
  });

  test("renders Button without crashing", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("Button Suite - when a location is passed to it", () => {
  test("displays the location", () => {
    const location = "Location1";
    render(<Button location={location} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(location);
  });

  test("should return All Locations text when nothing is passed", () => {
    const location = undefined;
    render(<Button location={location} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("All Locations");
  });
});
