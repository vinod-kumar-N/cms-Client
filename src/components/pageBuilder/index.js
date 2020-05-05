import React from "react";

class PageBuilder extends React.Component {
  render() {
    console.log("I am called");
    return (
      <div className="page-builder">
        <h2>I am in Page sdasdas</h2>
        <p>Some Page Builder Text here</p>
      </div>
    );
  }
}

export default PageBuilder;
