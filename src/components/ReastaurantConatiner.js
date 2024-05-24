import RestaurantCard, { withPromotedlable } from "./RestaurantCard";
import { HOTEL_NAME_API } from "../utils/constants.js";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const ReastaurantConatiner = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName, logginUser } = useContext(UserContext);
  const PromotedResturantCard = withPromotedlable(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(`${HOTEL_NAME_API}`);
    const jsonData = await data.json();
    setResListData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
      <div className="filter flex flex-wrap">
        <div className="m-2 p-2">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-red-400 m-2 border rounded-lg"
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

        <div className="flex items-center">
          <button
            className="px-4 py-1 bg-red-400 m-2 border rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              let filteredList = filteredData.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredData(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
          <div>
            <label>User Name: </label>
            <input
              className="p-2 border border-black"
              onChange={(e) => setUserName(e.target.value)}
              value={logginUser}
            />
          </div>
        </div>
      </div>
      <div className="card_lists_body">
        <div className="container flex flex-wrap gap-5 p-4 align-middle items-center ">
          {filteredData?.map((data) => (
            <Link
              className="card_link"
              key={data.info.id}
              to={`/resturantmenu/${data.info.id}`}
            >
              {data.info.promoted ? (
                <PromotedResturantCard resData={data.info} />
              ) : (
                <RestaurantCard resData={data.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReastaurantConatiner;
