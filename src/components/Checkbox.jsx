import React from "react";

function Checkbox({ label, checked, onChange }) {
  return (
    <div className="checkbox-container">
      <label>{label}</label>
      <input type="checkbox" className="checkbox-input" checked={checked} onChange={onChange} />
    </div>
  );
}

export default Checkbox;
