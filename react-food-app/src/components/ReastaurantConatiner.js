import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const ReastaurantConatiner = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setResListData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resListData?.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              const filteredres = resListData.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredData(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              let filteredList = filteredData.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredData(filteredList);
            }}
          >
            Filter By Rating 1
          </button>
        </div>
      </div>
      <div className="res_container">
        {filteredData?.map((data) => (
          <RestaurantCard key={data.info.id} resData={data.info} />
        ))}
      </div>
    </div>
  );
};

export default ReastaurantConatiner;
