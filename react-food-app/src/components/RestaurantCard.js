const RestaurantCard = () => {
  return (
    <div className="res_card">
      <div className="res_img_div">
        <img
          className="res_image"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
        />
      </div>
      <div className="res_details">
        <h3 className="res_name">McDonald's</h3>
        <h3 className="res_rating">4.2</h3>
        <h3 className="res_menu">Burgers, Beverages, Cafe</h3>
        <h3 className="res_add">Santacruz, East</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
