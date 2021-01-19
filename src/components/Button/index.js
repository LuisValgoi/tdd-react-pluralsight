import React from "react";
import "./index.style.css";

export default function Button({ onClick, name }) {
  return (
    <button className="button-location" onClick={onClick}>
      {name ? name : "All Locations"}
    </button>
  );
}
