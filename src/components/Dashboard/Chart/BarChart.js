import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { color } from "../../../constant/color";
const BarChart = () => {
  return (
    <Bar
      data={{
        labels: Array.from(Array(10)).map(
          (i) => Math.floor(Math.random() * 100) + 1
        ),
        datasets: [
          {
            fill: true,
            backgroundColor: "#f4bb60",
            data: Array.from(Array(10)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            // borderColor: "#56BBF1",
            barThickness: 9,
            borderRadius: 5,
            radius: 0,
            // borderWidth: 2,
            pointBorderWidth: 1,
            tension: 0.1,
          },
          {
            fill: true,
            backgroundColor: "#bbecff",
            data: Array.from(Array(10)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            // borderColor: "#56BBF1",
            barThickness: 9,
            borderRadius: 5,
            radius: 0,
            // borderWidth: 2,
            pointBorderWidth: 1,
            tension: 0.1,
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
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            grid: {
              display: true,
              color: "#eee",
              borderDash: [10, 3],
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
