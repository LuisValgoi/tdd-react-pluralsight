import React, { useCallback, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Map from "../../components/Map";

const INITIAL_LOCATIONS = [
  {
    name: "Portland",
    image: "portland",
    address: "Avenue Portland, 123",
  },
  {
    name: "Astoria",
    image: "astoria",
    address: "Avenue Astoria, 123",
  },
  {
    name: "",
    image: "none",
    address: "N/A",
  },
];

export default function StoreLocator() {
  const [currentMap, setCurrentMap] = useState(INITIAL_LOCATIONS[INITIAL_LOCATIONS.length - 1]);

  const handleChooseLocation = useCallback((image) => {
    setCurrentMap(INITIAL_LOCATIONS.find((location) => image === location.image));
  }, []);

  return (
    <div data-testid="store-locator">
      <Header />
      <div data-testid="store-locator-buttons">
        {INITIAL_LOCATIONS.map((store, index) => {
          return <Button onClick={() => handleChooseLocation(store.image)} key={index} name={store.name} />;
        })}
      </div>
      <Map image={currentMap.image} locationName={currentMap.name} />
    </div>
  );
}
