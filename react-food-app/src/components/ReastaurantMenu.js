import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const ReasaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=24463&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await menu.json();
    // console.log(json.data);
    setResMenu(json.data);
  };

  if (resMenu.length === 0 || resMenu === undefined) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    city,
    locality,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
  } = resMenu?.cards[0]?.card?.card?.info;

  const itemsCard =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("menu", itemsCard);
  return (
    <div className="resMenu_container">
      <div className="resMenu_info">
        <div className="resMenu_Details">
          <h1 className="resMenu_title">{name}</h1>
          <p className="resMenu_cuisines">{cuisines}</p>
          <p className="resMenu_locality">{locality}</p>
        </div>
        <div className="resMenu_rating_div">
          <h4 className="resMenu_rating">{avgRating}</h4>

          <p className="resMenu_total_rating">{totalRatingsString}</p>
        </div>
      </div>
      <hr className="dotted_seperator" />
      <span className="resMenu_message">{costForTwoMessage}</span>

      <div class="btn_container">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label class="switch" for="checkbox">
          <span class="slider"></span>
          Veg Only
        </label>
      </div>
    </div>
  );
};
export default ReasaurantMenu;
