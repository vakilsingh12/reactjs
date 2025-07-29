import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-parent">
      {Array(20)
        .fill("")
        .map(() => {
          return <div className="shimmer-child" key={Math.random()}></div>;
        })} 
    </div>
  );
};

export default Shimmer;
