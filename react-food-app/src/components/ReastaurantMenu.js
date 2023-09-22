import DetailMenu from "./DetailMenu";
import MenuAccordion from "./MenuAccordion";
import ResMenuInfo from "./ResMenuInfo";
import ShimmerUI from "./ShimmerUI";
import useResMenu from "../utils/useResMenu";

import { useParams } from "react-router-dom";

const ReasaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useResMenu(resId);
  if (resMenu?.length === 0 || resMenu === undefined) {
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
