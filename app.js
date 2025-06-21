 import React from "react";
 import ReactDOM from "react-dom/client";
 let heading1 = React.createElement(
        "h1",
        { key: "test" },
        "Heading123"
      );
      let heading2 = React.createElement(
        "h2",
        { key: "test2" },
        "Heading212"
      );
      const container = React.createElement("div", { id: "container" }, [
        heading1,
        heading2,
      ]);
      let root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(container);