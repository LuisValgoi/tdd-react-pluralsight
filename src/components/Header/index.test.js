import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header Suite", () => {
  test("renders Header text", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
  });
});
