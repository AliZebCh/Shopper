import React from "react";

function ButtonComponent(props) {
  const { backgroundColor = "#3730a3", color = "#cbd5e1" } = props;
  return (
    <button
      {...props}
      style={{
        color,
        backgroundColor,
      }}
    >{props.title}</button>
  );
}

export default bButtonComponent;
