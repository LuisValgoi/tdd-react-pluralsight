import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Map from "../../components/Map";

export default function StoreLocator() {
  return (
    <div data-testid="store-locator">
      <Header />
      <div data-testid="store-locator-buttons">
        <Button location="Portland" />
        <Button location="Astoria" />
        <Button />
      </div>
      <Map />
    </div>
  );
}
