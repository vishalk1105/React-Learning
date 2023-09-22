import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo_div">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav_items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <li
            onClick={() => {
              setAuth(!auth);
            }}
            className="auth_li"
          >
            {auth ? `LogIn` : `LogOut`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
