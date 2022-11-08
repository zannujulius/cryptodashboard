import { AiFillAccountBook } from "react-icons/ai";
import { color } from "../../../constant/color";
import { FaRegChartBar } from "react-icons/fa";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { BiLineChartDown, BiLineChart } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillInboxFill } from "react-icons/bs";
import "./style.css";

const TopCards = ({ bgColor, title, value, type }) => {
  return (
    <div className="d-flex align-items-center my-2 py-2">
      <div
        className="d-flex align-items-center justify-content-center rounded-2 "
        style={{
          background: bgColor,
          width: 50,
          height: 50,
        }}
      >
        <div className="">
          {type == "inc" ? (
            <BiLineChart size={20} />
          ) : type == "exp" ? (
            <BiLineChartDown size={20} />
          ) : type == "goal" ? (
            <MdDashboard size={20} />
          ) : (
            <BsFillBagCheckFill size={20} />
          )}
        </div>
      </div>
      <div className="px-3">
        <div
          className="top-card__title"
          style={{
            color: color.grey,
          }}
        >
          {title}
        </div>
        <div className="top-card__value">{value}</div>
      </div>
    </div>
  );
};

export default TopCards;
