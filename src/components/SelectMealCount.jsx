import React from "react";

const SelectMealCount = ({ label = "", formID = "", handler = () => {} }) => {
  return (
    <div className="selection-btns-container">
      <label for={formID}>{label}</label>
      <select id={formID} name={formID} onChange={handler}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
};

export default SelectMealCount;
