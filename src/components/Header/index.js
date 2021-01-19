import React from "react";
import mapChooser from "../../utils/mapChooser";

export default function Header() {
  return (
    <header data-testid="header">
      <img alt="Wired Brain Logo" src={mapChooser("wired-brain-coffee-logo")} />
    </header>
  );
}
