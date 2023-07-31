import { useState, useEffect } from "react";
import DetailMenu from "./DetailMenu";
import MenuAccordion from "./MenuAccordion";
import ResMenuInfo from "./ResMenuInfo";
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

  return (
    <div className="resMenu_container">
      <ResMenuInfo
        name={name}
        cuisines={cuisines}
        city={city}
        locality={locality}
        costForTwoMessage={costForTwoMessage}
        cloudinaryImageId={cloudinaryImageId}
        avgRating={avgRating}
        totalRatingsString={totalRatingsString}
      />
      {itemsCard.map((item, index) =>
        item?.card?.card?.title === undefined ? (
          ""
        ) : (
          <MenuAccordion key={index} title={item?.card?.card?.title}>
            <DetailMenu data={item} />
          </MenuAccordion>
        )
      )}
    </div>
  );
};
export default ReasaurantMenu;
