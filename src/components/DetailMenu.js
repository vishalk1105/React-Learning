import { useDispatch } from "react-redux";
import { CDN_URL, MENU_ITEM_API } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const DetailMenu = ({ data, ukey, cartItem }) => {
  const dispatch = useDispatch();

  const handleAddClick = (itemData) => {
    dispatch(addItem(itemData));
  };

  return (
    <div key={ukey}>
      {data?.map((i) => {
        return (
          <div key={i?.card?.info?.id}>
            <div className="detail_menu_container">
              <div className="detail_menu_data">
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
                  alt=""
                />

                <button
                  className="detail_menu_btn"
                  onClick={() => handleAddClick(i)}
                >
                  ADD+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailMenu;
