import React from "react";

const Shimmer = () => {
  return (
    <div className="restrauntList">
      {Array(20)
        .fill("")
        .map((e,index) => {
          return <div className="shimmer-child" key={`shimmer_${index}`}></div>;
        })} 
    </div>
  );
};

export default Shimmer;
