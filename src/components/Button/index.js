import React from "react";
import "./index.style.css";

export default function Button(props) {
  return (
    <button className="button-location" onClick={props.handleClick}>
      {props.locationName ? props.locationName : "All Locations"}
    </button>
  );
}
