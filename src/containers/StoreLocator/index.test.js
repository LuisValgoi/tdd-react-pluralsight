import { render, screen } from "@testing-library/react";
import StoreLocator from "./index";

describe("StoreLocator Suite", () => {
  test("renders StoreLocator text", () => {
    render(<StoreLocator />);
    const storeLocatorElement = screen.getByText(/StoreLocator/i);
    expect(storeLocatorElement).toBeInTheDocument();
  });
});
