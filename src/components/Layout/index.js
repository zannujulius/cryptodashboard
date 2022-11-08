import SideNav from "../SideNav";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout d-flex align-items-start justify-content-between">
      <div className="">
        <SideNav />
      </div>
      <div className="content w-100">{children}</div>
    </div>
  );
};

export default Layout;
