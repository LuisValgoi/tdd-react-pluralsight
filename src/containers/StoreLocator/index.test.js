import { fireEvent, render, screen } from "@testing-library/react";
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

describe("StoreLocator Suite - chooseMap", () => {
  beforeEach(() => {
    render(<StoreLocator />);
  });

  test("updates the map to the portland image once pressed on portland button", () => {
    const buttonElement = screen.getByRole("button", { name: /portland/i });
    fireEvent.click(buttonElement);

    const imgElement = screen.getByAltText("Portland");
    expect(imgElement).toBeInTheDocument();
  });
});
