import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, locality, cloudinaryImageId } = resData;
  return (
    <div className="res_card">
      <div className="res_img_div">
        <img className="res_image" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res_details">
        <h3 className="res_name">{name}</h3>
        <h3 className="res_rating">{avgRating}</h3>
        <h3 className="res_menu">{cuisines.join(", ")}</h3>
        <h3 className="res_add">{locality}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
