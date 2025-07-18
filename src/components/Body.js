import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../constants";
import { useState } from "react";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restruntList, setRestruntList] = useState(restrauntList);
  const filterData = () => {
    const filterData = restrauntList.filter((restraunt) => {
      return restraunt?.info?.name
        ?.toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setRestruntList(filterData);
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
