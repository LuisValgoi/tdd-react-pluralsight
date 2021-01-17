import { render, screen } from "@testing-library/react";
import Map from "./index";

describe("Map Suite", () => {
  test("renders Map text", () => {
    render(<Map />);
    const mapElement = screen.getByText(/Map/i);
    expect(mapElement).toBeInTheDocument();
  });
});
