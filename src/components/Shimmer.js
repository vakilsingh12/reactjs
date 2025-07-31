import React from "react";

const Shimmer = () => {
  return (
    <div className="restrauntList">
      {Array(20)
        .fill("")
        .map(() => {
          return <div className="shimmer-child" key={Math.random()}></div>;
        })} 
    </div>
  );
};

export default Shimmer;
