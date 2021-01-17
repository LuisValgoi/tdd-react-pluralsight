import { render, screen } from "@testing-library/react";
import App from "./index";

describe("App Suite", () => {
  test("renders App text", () => {
    render(<App />);
    const appElement = screen.getByText(/App/i);
    expect(appElement).toBeInTheDocument();
  });
  test("renders a StoreLocator", () => {
    render(<App />);
    const storeLocatorElement = screen.getByText(/StoreLocator/i);
    expect(storeLocatorElement).toBeInTheDocument();
  });
});
