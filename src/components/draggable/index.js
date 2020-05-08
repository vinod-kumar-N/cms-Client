import React, { useRef } from "react";
import { useDraggable } from "use-draggable";
import "./index.scss";

const Draggable = () => {
  const { targetRef } = useDraggable({ controlStyle: true });
  return (
    <div ref={targetRef} className="card">
      <h1>You can drag me :)</h1>
    </div>
  );
};

export default Draggable;
