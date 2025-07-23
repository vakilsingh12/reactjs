import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../constants";
import { useEffect, useState } from "react";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restruntList, setRestruntList] = useState(restrauntList);
  const filterData = () => {
    const filterData = restruntList.filter((restraunt) => {
      return restraunt?.info?.name
        ?.toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setRestruntList(filterData);
  };
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const fetchRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestruntList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
      </div>
      <div className="restrauntList">
        {restruntList.map((restraunt) => (
          <RestrauntCard
            restraunt={restraunt?.info}
            key={restraunt?.info?.id}
          />
        ))}
      </div>
    </>
  );
};
export default Body;
