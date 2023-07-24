import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const ReastaurantConatiner = () => {
  const [resListData, setResListData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setResListData(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  if (resListData.length === 0) {
    return <ShimmerUI />;
  }
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
