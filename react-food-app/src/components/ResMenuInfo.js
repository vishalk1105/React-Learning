const ResMenuInfo = ({
  name,
  city,
  cuisines,
  locality,
  costForTwoMessage,
  cloudinaryImageId,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <>
      <div className="resMenu_info">
        <div className="resMenu_Details">
          <h1 className="resMenu_title">{name}</h1>
          <p className="resMenu_cuisines">{cuisines.join(", ")}</p>
          <p className="resMenu_locality">{locality}</p>
        </div>
        <div className="resMenu_rating_div">
          <h4 className="resMenu_rating">{avgRating}</h4>

          <p className="resMenu_total_rating">{totalRatingsString}</p>
        </div>
      </div>
      <hr className="dotted_seperator" />
      <span className="resMenu_message">{costForTwoMessage}</span>
      <div className="btn_container">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">
          <span className="slider"></span>
        </label>
      </div>
      <div className="border_bottom_div"></div>
    </>
  );
};
export default ResMenuInfo;
