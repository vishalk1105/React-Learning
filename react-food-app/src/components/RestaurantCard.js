import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, locality, cloudinaryImageId } = resData;
  const { logginUser } = useContext(UserContext);
  return (
    <div className="pb-3 p-2 m-2 w-[300px] h-[400px] flex flex-col justify-between rounded-xl shadow-xl hover:scale-105 duration-300">
      <div className="res_img_div">
        <img
          className="rounded-lg food_img "
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="pl-1 pt-2">
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <h3 className="res_rating">{avgRating} ⭐</h3>
        <h3 className="res_menu">{cuisines.join(", ")}</h3>
        <h3 className="res_add">{locality}</h3>
        {/*   </div>h3>{logginUser}</h3>*/}
      </div>
    </div>
  );
};

export const withPromotedlable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
