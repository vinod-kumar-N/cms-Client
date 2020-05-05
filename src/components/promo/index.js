import React from "react";
import "./promo.scss";
const Promo = (props) => {
  return (
    <section className={"promo-slot"} onClick={props.clickFn}>
      <div className="img-section">
        <img src={props.src} alt="" />
      </div>
      <div className={"content-section"}>
        <h2>{props.title}</h2>
        {props.children && props.children.length ? (
          props.children
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </section>
  );
};

Promo.defaultProps = {
  clickFn: () => {},
};

export default Promo;
