import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between  bg-red-100 shadow-lg mb-3 flex-wrap ">
      <div className="logo_div">
        <img className="w-28" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-2 ">
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <li
            className="px-2"
            onClick={() => {
              setAuth(!auth);
            }}
          >
            {auth ? `LogIn` : `LogOut`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
