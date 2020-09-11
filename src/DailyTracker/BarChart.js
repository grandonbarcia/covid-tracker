import React, { useState, useEffect, useContext } from "react";
import {Line} from "react-chartjs-2";
import {DataContext} from "../DataProvider"


const BarChart = ({categoryType}) => {

  const {value5} = useContext(DataContext);
  const [graphData] = value5;

  let [ labels, setLabels ] = useState([]);
  let [ points, setPoints ] = useState([]);
  useEffect(() => {
    categoryType = categoryType.toLowerCase()

    setLabels(graphData.dates);
    setPoints(graphData[categoryType]);
  }, [graphData, categoryType])

  const data = {
  labels: labels,
  datasets: [
    {
      label: "United States",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: points
    }
  ]
};





  return (


        <div className="col-md-12 offset-md-0 text-right">
          <Line
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
        </div>


  )
}

export default BarChart;
