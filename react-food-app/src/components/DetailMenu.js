import { MENU_ITEM_API } from "../utils/constants";

const DetailMenu = (item) => {
  const data =
    item?.data?.card?.card?.itemCards ?? item?.data?.card?.card?.categories;
  return (
    <>
      {data?.map((i) => {
        return (
          <div key={i?.card?.info?.id}>
            <div className="detail_menu_container">
              <div className="detail_menu_data">
                <div></div>
                <div>
                  <h3 className="detail_menu_title">{i?.card?.info?.name}</h3>
                </div>
                <div className="detail_menu_price">
                  ₹{i?.card?.info?.price / 100}
                </div>
                <div className="detail_menu_descr">
                  {i?.card?.info?.description}
                </div>
              </div>
              <div className="detail_menu_image_container">
                <img
                  className="detail_menu_image"
                  src={`${MENU_ITEM_API}${i?.card?.info?.imageId}`}
                />
                <button className="detail_menu_btn">ADD+</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailMenu;
