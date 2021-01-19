import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header Suite", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("renders Header without crashing", () => {
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders a logo", () => {
    const logoElement = screen.getByRole("img");
    expect(logoElement).toHaveAttribute("src", "/images/wired-brain-coffee-logo.png");
  });
});
