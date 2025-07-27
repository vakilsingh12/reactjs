import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(20)
        .fill("")
        .map(() => {
          return (
            <div className="restrauntList" key={Math.random()}>
              <div className="card">
                <div className="shimmer-image"></div>
                <div className="shimmer-text"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
