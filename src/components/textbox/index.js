import React from "react";

const Textbox = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onChangeFn(e.target.value);
      }}
    />
  );
};

export default Textbox;
