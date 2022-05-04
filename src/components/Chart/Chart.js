import React from "react";
import "./ChartBar";
import ChartBar from "./ChartBar";
import './chart.css'
import './chartBar.css'

const Chart = (props) => {

  const dataValue = props.dataPoints.map(data => data.value)
  const maxPoints = Math.max(...dataValue);
  console.log(dataValue)
  console.log(maxPoints)
  return (
  
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxPoints}
          key={dataPoint.label}
        />
      ))}
    </div>
    
  );
};

export default Chart;
