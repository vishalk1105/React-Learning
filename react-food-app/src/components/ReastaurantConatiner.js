import RestaurantCard from "./RestaurantCard";
import { HOTEL_NAME_API } from "../utils/constants.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const ReastaurantConatiner = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(`${HOTEL_NAME_API}`);
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

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline, please check Internet connection</h1>;
  }

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
            Filter By Rating
          </button>
        </div>
      </div>
      <div className="res_container">
        {filteredData?.map((data) => (
          <Link key={data.info.id} to={`/resturantmenu/${data.info.id}`}>
            <RestaurantCard resData={data.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReastaurantConatiner;
