import React from "react";

export default function Box(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}
