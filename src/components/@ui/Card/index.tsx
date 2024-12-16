import React, { useState } from "react";
import LayoutCollapseButton from "theme/Buttons/LayoutCollapseButton";
import { Card } from "theme/base";

export const CardBuy = () => {
  const [collapsing, setCollapsing] = useState(false);

  const toggleCollapse = () => {
    setCollapsing((prev) => !prev);
  };

  return (
    <Card>
      <LayoutCollapseButton
        collapsing={collapsing}
        toggleCollapse={toggleCollapse}
      />
    </Card>
  );
};
