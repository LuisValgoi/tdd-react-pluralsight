import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header Suite", () => {
  test("renders Header text", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Header/i);
    expect(linkElement).toBeInTheDocument();
  });
});
