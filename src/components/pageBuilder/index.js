import React from "react";
import BuilderHeader from "../builderHeader";
import Sketch from "../builderHeader/colorPicker";
import Draggable from "../draggable";
class PageBuilder extends React.Component {
  render() {
    return (
      <div className="page-builder">
        <BuilderHeader />
        <Draggable />
      </div>
    );
  }
}

export default PageBuilder;
