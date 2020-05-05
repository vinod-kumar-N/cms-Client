import React from "react";
import "./header.scss";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header className="header">
      <div className="leftSection">
        <div className="logo">
          <img src="promo-slot.png" alt="logo" />
        </div>
      </div>
      <div className="rightSection">
        {!props.userName ? (
          <>
            <button onClick={props.callLogin} className="cmnBtn">
              Login
            </button>
            <button onClick={props.callRegister} className="cmnBtn">
              Register
            </button>
          </>
        ) : (
          <button className="cmnBtn">{`Welcome ${props.userName}`}</button>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (store) => ({
  userName: store.userName,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
