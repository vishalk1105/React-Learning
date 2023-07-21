import logo_image from "../assets/app-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_div">
        <img className="logo" src={logo_image} alt="" />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
