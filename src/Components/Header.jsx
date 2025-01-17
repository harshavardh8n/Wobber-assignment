import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import NotFound from "./NotFound";

const Header = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "All" },
    { id: "tab2", label: "Applied" },
    { id: "tab3", label: "Hired" },
    { id: "tab4", label: "Closed" },
  ];

  // Render content based on activeTab state
  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <TabContent activeTab={activeTab} />;
      case "tab2":
        return <NotFound type="applied" setActiveTab={setActiveTab} />;
      case "tab3":
        return <NotFound type="hired" setActiveTab={setActiveTab} />;
      case "tab4":
        return <NotFound type="closed" setActiveTab={setActiveTab} />;
      default:
        return <NotFound type="applied" setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex">
        <div className="h-10 w-10 mr-2 border border-black rounded flex justify-center items-center">
          <CiFilter size={24} strokeWidth={1} />
        </div>

        <div className="border border-black rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>

      {/* Content display with full width */}
      <div className="w-full mt-4">{renderContent()}</div>
    </div>
  );
};

export default Header;
