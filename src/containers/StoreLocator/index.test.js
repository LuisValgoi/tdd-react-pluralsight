import { render, screen } from "@testing-library/react";
import StoreLocator from "./index";

describe("StoreLocator Suite", () => {
  beforeEach(() => {
    render(<StoreLocator />);
  });

  test("renders StoreLocator without crashing", () => {
    const storeLocatorElement = screen.getByTestId("store-locator");
    expect(storeLocatorElement).toBeInTheDocument();
  });

  test("renders Header", () => {
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders 3 Button", () => {
    const storeLocatorButtonsElement = screen.getByTestId("store-locator-buttons");
    expect(storeLocatorButtonsElement).toBeInTheDocument();
    expect(storeLocatorButtonsElement.children).toHaveLength(3);
  });
});
