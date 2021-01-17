import React from "react";
import "./index.style.css";

export default function Button(props) {
  return <button className="button-location">{props.location ? props.location : "All Locations"}</button>;
}
