import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { color } from "../../../constant/color";
const PriceChart = ({ sparkline }) => {
  return (
    <Line
      data={{
        labels: sparkline,
        datasets: [
          {
            label: "PMS",
            fill: true,
            backgroundColor: "#ffe4b82f",
            data: sparkline,
            borderColor: "#f4bb60",
            radius: 0,
            borderWidth: 2,
            // borderWidth: 2,
            pointBorderWidth: 1,
            tension: 0.5,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "#a1a1a1",
            },
          },
          title: {
            display: false,
            color: "#a1a1a1",
            text: "BETWEEN SEP 9 - 27",
            font: {
              size: 14,
              weight: 500,
            },
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
              color: "#DEDEDE",
              borderDash: [10, 3],
            },
          },
        },
      }}
    />
  );
};

export default PriceChart;
