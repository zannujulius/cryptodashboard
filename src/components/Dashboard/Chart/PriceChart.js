import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { color } from "../../../constant/color";
const PriceChart = ({ sparkline, color }) => {
  const percentcolor = (item) => {
    return item < 0 ? "#ff634723" : "#b8ffc72f";
  };

  const borderColor = (item) => {
    return item < 0 ? "tomato" : "green";
  };
  return (
    <Line
      data={{
        labels: sparkline,
        datasets: [
          {
            fill: true,
            backgroundColor: percentcolor(color),
            data: sparkline,
            borderColor: borderColor(color),
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
