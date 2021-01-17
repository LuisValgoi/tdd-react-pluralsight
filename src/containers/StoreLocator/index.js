import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function StoreLocator() {
  return (
    <div data-testid="store-locator">
      <Header />
      <div data-testid="store-locator-buttons">
        <Button />
        <Button />
      </div>
    </div>
  );
}
