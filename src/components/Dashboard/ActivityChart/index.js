import BarChart from "../Chart/BarChart";
import "./style.css";

const ActivityChart = () => {
  return (
    <div className="mt-2">
      <div className="d-flex align-items-center justify-content-between px-1 py-3">
        <div className="activiy-title">Activity Graph</div>
        <div className="activity-value">$186K</div>
      </div>
      <div
        className=""
        style={{
          height: 180,
        }}
      >
        <BarChart />
      </div>
    </div>
  );
};

export default ActivityChart;
