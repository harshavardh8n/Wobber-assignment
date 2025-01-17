import React from "react";

const NotFound = ({ type, setActiveTab }) => {
  // Handler for Apply button click to switch to "All" tab
  const handleApplyClick = () => {
    setActiveTab("tab1"); // Switch to the "All" tab
  };

  return (
    <div className="w-full">
      <div className="w-1/2 flex flex-col m-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9zC2Zj7YyjDn8snHgDlilWNTowvXjEsOUooNpX3BkzpDVbcMlWyPpxCWJNDiSzfvXFI&usqp=CAU"
          alt="No campaign found"
          className="h-60 w-60 m-auto"
        />
        <div className="w-3/4 text-center m-auto">
          <div className="font-semibold">No campaigns Found</div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-700">
              All your {type} campaigns will be found here
            </div>
            <button
              className="text-white bg-blue-700 w-1/4 p-2 m-auto rounded text-sm"
              onClick={handleApplyClick} 
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
