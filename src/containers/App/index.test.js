import { render, screen } from "@testing-library/react";
import App from "./index";

describe("App Suite", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders App without crashing", () => {
    const appElement = screen.getByTestId("app");

    expect(appElement).toBeInTheDocument();
  });

  test("renders a StoreLocator", () => {
    const storeLocatorElement = screen.getByTestId("store-locator");

    expect(storeLocatorElement).toBeInTheDocument();
  });
});
