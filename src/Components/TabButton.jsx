import React from "react";

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`lg:px-10 px-4 py-2 border-l border-gray-800 ${
        isActive
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-700 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
