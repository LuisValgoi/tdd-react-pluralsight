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
    const name = "Test";
    render(<Button name={name} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(name);
  });

  test("displays All Locations when nothing is passed", () => {
    render(<Button name={undefined} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("All Locations");
  });

  test("call a function passed to it when clicked", () => {
    const mockCallback = jest.fn();
    render(<Button onClick={mockCallback} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
