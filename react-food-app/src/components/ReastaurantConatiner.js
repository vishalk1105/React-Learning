import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/resList";
import { useState } from "react";
const ReastaurantConatiner = () => {
  const [resListData, setResListData] = useState(resList);

  return (
    <div className="body">
      <div>
        <button
          onClick={() => {
            let filteredList = resListData.filter(
              (res) => res.data.avgRating >= 4
            );
            setResListData(filteredList);
          }}
        >
          Filter By Rating 1
        </button>
      </div>
      <div className="res_container">
        {resListData.map((data) => (
          <RestaurantCard key={data.data.id} resData={data.data} />
        ))}
      </div>
    </div>
  );
};

export default ReastaurantConatiner;
