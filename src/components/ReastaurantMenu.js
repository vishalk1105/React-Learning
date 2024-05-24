import DetailMenu from "./DetailMenu";
import MenuAccordion from "./MenuAccordion";
import ResMenuInfo from "./ResMenuInfo";
import ShimmerUI from "./ShimmerUI";
import useResMenu from "../utils/useResMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ReasaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

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
  } = resMenu?.cards[2]?.card?.card?.info;

  const itemsCard =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

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
          <MenuAccordion
            key={index}
            title={item?.card?.card?.title}
            number={
              item?.card?.card?.itemCards?.length ??
              item?.card?.card?.categories?.length
            }
            isOpen={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          >
            <DetailMenu ukey={index} data={item.card?.card?.itemCards} />
          </MenuAccordion>
        )
      )}
    </div>
  );
};
export default ReasaurantMenu;
