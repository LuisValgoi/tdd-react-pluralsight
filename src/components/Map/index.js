import React from "react";
import "./index.style.css";

export default function Map(props) {
  const imgSrc = props.imageName ? `images/${props.imageName}` : "images/none.png";
  const imgAlt = props.location;

  return (
    <div data-testid="map" className="map-box">
      <img alt={imgAlt} src={imgSrc} />
    </div>
  );
}
