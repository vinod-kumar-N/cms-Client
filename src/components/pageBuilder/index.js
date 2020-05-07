import React from "react";
import BuilderHeader from "../builderHeader";
import Sketch from "../builderHeader/colorPicker";
class PageBuilder extends React.Component {
  render() {
    return (
      <div className="page-builder">
        <BuilderHeader />
      </div>
    );
  }
}

export default PageBuilder;
