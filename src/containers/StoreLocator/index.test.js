import { render, screen } from "@testing-library/react";
import StoreLocator from "./index";

describe("StoreLocator Suite", () => {
  test("renders StoreLocator text", () => {
    render(<StoreLocator />);
    const linkElement = screen.getByText(/StoreLocator/i);
    expect(linkElement).toBeInTheDocument();
  });
});
