import React from "react";
import "./chartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log(barFillHeight)
  }
  
  return (
    <div className="chart__bar">
      <div className="inner__chart">
        <div className="chart__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
