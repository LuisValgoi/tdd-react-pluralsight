import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Map from "../../components/Map";

const INITIAL_LOCATIONS = [
  {
    location: "Portland",
    address: "Avenue Portland, 123",
  },
  {
    location: "Astoria",
    address: "Avenue Astoria, 123",
  },
  {
    location: "",
    address: "N/A",
  },
];

export default function StoreLocator() {
  const [currentMap, setCurrentMap] = useState("none.png");

  return (
    <div data-testid="store-locator">
      <Header />
      <div data-testid="store-locator-buttons">
        {INITIAL_LOCATIONS.map((store, index) => {
          return <Button key={index} location={store.location} />;
        })}
      </div>
      <Map />
    </div>
  );
}
