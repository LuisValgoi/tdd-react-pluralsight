import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import StoreLocator from "./index";
import axios from "axios";

function mockCall() {
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: [
        {
          name: "Portland",
          image: "portland",
          address: "Avenue Portland, 123",
        },
        {
          name: "AstoriaUAEHAUHEAUHE",
          image: "astoria",
          address: "Avenue Astoria, 123",
        },
        {
          name: "",
          image: "none",
          address: "N/A",
        },
      ],
    })
  );
}

jest.mock("axios");

beforeEach(() => {
  mockCall();
});

describe("StoreLocator Suite", () => {
  test("renders correctly", () => {
    const { container } = render(<StoreLocator />);

    expect(container).toMatchSnapshot();
  });

  test("renders StoreLocator without crashing", async () => {
    await waitFor(() => {
      render(<StoreLocator />);

      const storeLocatorElement = screen.getByTestId("store-locator");

      expect(storeLocatorElement).toBeInTheDocument();
    });
  });

  test("renders Header", async () => {
    await waitFor(() => {
      render(<StoreLocator />);

      const headerElement = screen.getByTestId("header");

      expect(headerElement).toBeInTheDocument();
    });
  });

  test("renders no buttons right away", async () => {
    await waitFor(() => {
      render(<StoreLocator />);

      const storeLocatorButtonsElement = screen.getByTestId("store-locator-buttons");

      expect(storeLocatorButtonsElement).toBeInTheDocument();
      expect(storeLocatorButtonsElement.children).toHaveLength(0);
    });
  });
});

describe("StoreLocator Suite - chooseMap", () => {
  test("updates the map to the portland image once pressed on portland button", async () => {
    await waitFor(() => {
      render(<StoreLocator />);

      const buttonElement = screen.getByRole("button", { name: /portland/i });
      fireEvent.click(buttonElement);

      const imgElement = screen.getByText(/portland/i);
      expect(imgElement).toBeInTheDocument();
    });
  });
});
