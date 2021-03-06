import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Map from "../../components/Map";
import * as ShopAPI from "../../services/shops";

export default function StoreLocator() {
  const [shops, setShops] = useState([]);
  const [currentMap, setCurrentMap] = useState({});

  const handleButtonClick = (image) => {
    const foundShop = shops.find((location) => image === location.image);
    setCurrentMap(foundShop);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await ShopAPI.fetchShops();
        setShops(data);
        setCurrentMap(data[data.length - 1]);
      } catch (error) {}
    }
    loadData();
  }, []);

  return (
    <div data-testid="store-locator">
      <Header />
      <div data-testid="store-locator-buttons">
        {shops.map((store, index) => {
          return <Button onClick={() => handleButtonClick(store.image)} key={index} name={store.name} />;
        })}
      </div>
      {shops && <Map image={currentMap.image} locationName={currentMap.name} />}
    </div>
  );
}
