import React, { useRef } from "react";

import useOnScreen from "hooks/useOnScreen";

const ABTest: React.FC<ABTestProps> = ({ children, id, isControl = false }) => {
  const rootElementRef = useRef(null);
  const isOnScreen = useOnScreen(rootElementRef);

  return (
    <div
      id={id}
      ref={rootElementRef}
      style={{ display: isControl ? "block" : "none" }}
    >
      {isOnScreen && children}
    </div>
  );
};

export default ABTest;
