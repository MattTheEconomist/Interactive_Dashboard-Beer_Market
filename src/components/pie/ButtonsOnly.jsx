import React from "react";

export default function ButtonsOnly(props) {
  const { onChangeVendor } = props;

  function buttonClick(e) {
    const blackColor = "rgba(0, 0, 0, 1)";
    onChangeVendor("All", blackColor);
  }

  return (
    <div>
      <button id="restoreViewBtn"onClick={buttonClick}>{"Restore Top-Level View"}</button>
    </div>
  );
}
