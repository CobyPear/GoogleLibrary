import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem(props) {
  return <li className="list-group-item">{props.value}</li>;
}
