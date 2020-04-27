import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="leftSection">
        <div className="logo">
          <img src="logo-placeholder.png" alt="logo" />
        </div>
      </div>
      <div className="rightSection">
        <button onClick={props.callLogin} className="cmnBtn">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
