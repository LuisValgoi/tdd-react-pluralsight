import { render, screen } from "@testing-library/react";
import App from "./index";

describe("App Suite", () => {
  test("renders App without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });
  test("renders a StoreLocator", () => {
    render(<App />);
    const storeLocatorElement = screen.getByTestId("store-locator");
    expect(storeLocatorElement).toBeInTheDocument();
  });
});
