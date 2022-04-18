import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={maxValue}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
