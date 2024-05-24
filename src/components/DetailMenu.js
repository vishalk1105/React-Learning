import { useDispatch } from "react-redux";
import { CDN_URL, MENU_ITEM_API } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const DetailMenu = (item) => {
  const dispatch = useDispatch();
  const data =
    item?.data?.card?.card?.itemCards ?? item?.data?.card?.card?.categories;

  const handleAddClick = (itemData) => {
    dispatch(addItem(itemData));
  };

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
                  src={`${CDN_URL}${i?.card?.info?.imageId}`}
                />
                <button
                  className="detail_menu_btn"
                  onClick={() => handleAddClick(i?.card?.info)}
                >
                  ADD+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailMenu;
