import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders App text", () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
