import React from "react";
import "./index.style.css";
import mapChooser from "../../utils/mapChooser";

export default function Map({ image, locationName }) {
  const imgSrc = mapChooser(image);
  const imgAlt = locationName;

  return (
    <div data-testid="map" className="map-box">
      <img alt={imgAlt} src={imgSrc} />
    </div>
  );
}
