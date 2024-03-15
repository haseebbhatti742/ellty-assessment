import React from "react";

function CustomButton() {
  return (
    <button className="button" onClick={() => alert("Done")}>
      Done
    </button>
  );
}

export default CustomButton;
