import { render, screen, fireEvent } from "@testing-library/react";
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

describe("Button Suite - Custom Props", () => {
  test("displays the location when a location is passed to it", () => {
    const locationName = "Test";
    render(<Button locationName={locationName} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(locationName);
  });

  test("displays All Locations when nothing is passed", () => {
    render(<Button locationName={undefined} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("All Locations");
  });

  test("call a function passed to it when clicked", () => {
    const mockCallback = jest.fn();
    render(<Button handleClick={mockCallback} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
