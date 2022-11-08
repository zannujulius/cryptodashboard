import { MdSettings, MdCalendarToday, MdArrowForward } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { BsBagCheck } from "react-icons/bs";
import { color } from "../../../constant/color";

const ActivityCard = ({ title, type, link }) => {
  return (
    <div className="d-flex align-items-center justify-content-between px-3 py-2 mt-4">
      <div className="w-50 d-flex align-items-center">
        <div
          className="d-flex align-items-center justify-content-center rounded-3"
          style={{
            width: 50,
            height: 50,
            background: "#eceafe",
          }}
        >
          <div>
            {type == "date" ? (
              <MdCalendarToday color={color.primary} size={22} />
            ) : type == "settings" ? (
              <MdSettings color={color.primary} size={22} />
            ) : type == "goals" ? (
              <GrLineChart color={color.primary} size={22} />
            ) : (
              <BsBagCheck color={color.primary} size={22} />
            )}
          </div>
        </div>
        <div
          className="px-3"
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#7c7c7c",
          }}
        >
          {title}
        </div>
      </div>
      <div className="d-flex w-25 align-items-center justify-content-end">
        <div>
          <MdArrowForward size={18} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
