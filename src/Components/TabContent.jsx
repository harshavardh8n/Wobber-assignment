import React from "react";
import All from "./All";
import NotFound from "./NotFound";

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case "tab1":
      return <All />;
    case "tab2":
      return <NotFound type="applied" />;
    case "tab3":
      return <NotFound type="hired" />;
    case "tab4":
      return <NotFound type="closed" />;
    default:
      return <NotFound type="applied" />;
  }
};

export default TabContent;
