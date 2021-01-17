import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});
