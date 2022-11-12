import moment from "moment";
import { MdBadge } from "react-icons/md";
import { color } from "../../../constant/color";
import "./style.css";
import { BsPaperclip } from "react-icons/bs";

const HistoryCard = ({ index }) => {
  const title = () =>
    index % 2 == 0
      ? "Salary transfer"
      : index % 2 == 1
      ? "Pak transfer"
      : "Others";

  const colorBg = () =>
    index % 2 == 0
      ? {
          color: "#eff9f4",
          bg: "#2500d2",
        }
      : index % 2 == 1
      ? {
          color: "#c046ea",
          bg: "#fcf7fd",
        }
      : {
          color: "#fd902c",
          bg: "#fff7f1",
        };
  return (
    <div className="  py-1 my-2">
      <div
        className="history-date d-none"
        style={{
          color: color.grey,
        }}
      >
        {moment(Date.now()).subtract("1", "day").format("ll")}
      </div>
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-4">
            <div className="d-flex align-items-center">
              <div className="p-2">
                <MdBadge size={20} />
              </div>
              <div className="mx-2">
                <div
                  className="history-title"
                  style={{
                    fontSize: 14,
                  }}
                >
                  {title()}
                </div>
                <div
                  className="history-date"
                  style={{
                    color: color.grey,
                    fontSize: 12,
                  }}
                >
                  {moment(Date.now()).format("lll")}
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-center py-1 ">
              <div
                className="d-flex align-items-center justify-content-center rounded-2 p-2"
                style={{
                  background: "#fcf4f3",
                }}
              >
                <div
                  className=""
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "tomato",
                  }}
                ></div>
              </div>
              <div className="history-middle px-3 ">Supplies</div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-end">
              <div
                className="rounded-2 d-flex align-items-center justify-content-center"
                style={{
                  width: 25,
                  height: 25,
                  background: "#f4f4f4",
                }}
              >
                <div className="">
                  <BsPaperclip size={16} />
                </div>
              </div>
              <div
                className="history-value mx-1"
                style={{
                  fontSize: 13,
                }}
              >
                +$50,224.38
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
