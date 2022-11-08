import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { color } from "../../constant/color";
import "./style.css";

const SideNav = () => {
  return (
    <div className="side-nav bg-white shadow-sm d-flex flex-column align-items-center ">
      <div className="side-nav_brand mt-3">
        <div className="side-nav_image shadow-sm"></div>
      </div>
      <div className="side-nav_items-cover mt-3 w-100">
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <AiOutlineHome size={22} color={color.primary} />
          </div>
        </div>
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <AiOutlineUser size={22} color={color.grey} />
          </div>
        </div>
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <BsChat size={22} color={color.grey} />
          </div>
          <div className="chat-icon d-flex flex-column align-items-center justify-content-center p-1">
            <div className="text-white text-center">4</div>
          </div>
        </div>
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <FiSettings size={22} color={color.grey} />
          </div>
        </div>
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <AiOutlineHome size={22} color={color.grey} />
          </div>
        </div>
        <div className="side-nav_items py-2 d-flex flex-column align-items-center justify-content-center my-4 w-100">
          <div className="">
            <AiOutlineHome size={22} color={color.grey} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
