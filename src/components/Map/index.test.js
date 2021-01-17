import { render, screen } from "@testing-library/react";
import Map from "./index";

describe("Map Suite", () => {
  test("renders Map text", () => {
    render(<Map />);
    const linkElement = screen.getByText(/Map/i);
    expect(linkElement).toBeInTheDocument();
  });
});
