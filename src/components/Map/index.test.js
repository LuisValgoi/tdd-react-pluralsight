import { render, screen } from "@testing-library/react";
import Map from "./index";

describe("Map Suite", () => {
  beforeEach(() => {
    render(<Map />);
  });

  test("renders Map", () => {
    const mapElement = screen.getByTestId("map");
    expect(mapElement).toBeInTheDocument();
  });

  test("renders Map with a image inside", () => {
    const mapElement = screen.getByTestId("map");
    const imgElement = screen.getByRole("img");
    expect(mapElement).toContainElement(imgElement);
    expect(imgElement).toBeInTheDocument();
  });
});
