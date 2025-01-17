import React from "react";
import { FaInstagram } from "react-icons/fa6";

const AllCard = ({ image, bimage, bname, pending, price, hired, outofhired,payout }) => {
  // Calculate the background color for the progress bar
  const getProgressBarColor = () => {
    if (hired === 0) return "bg-gray-300";
    if (hired / outofhired <= 1) return "bg-yellow-400";
    return "bg-red-500";
  };

  // Calculate the progress bar width as a percentage
  const getProgressBarWidth = () => {
    const ratio = Math.min(hired / outofhired, 1); // Cap the ratio at 1
    return `${ratio * 100}%`; // Convert to percentage
  };

  return (
    <div className="lg:w-[23vw] h-[380px] rounded-lg border relative">
      {/* Profile Image */}
      <div className="h-12 w-12 absolute bg-red-400 top-52 left-7 rounded-full overflow-hidden">
        <img src={image} alt="" />
      </div>
      
      {/* Brand Image */}
      <div className="h-60 flex justify-center">
        <div className="m-auto h-40 w-full overflow-hidden">
          <img src={bimage} alt="" />
        </div>
      </div>
      
      {/* Card Details */}
      <div className="border-t pl-5 py-2">
        <div className="flex justify-end">
          <div className="h-6 w-15 text-xs bg-red-600 p-1 rounded text-white mr-2">
            {pending ? "Profile Pending" : "Profile Completed"}
          </div>
        </div>
        
        <div className="mt-1">
          {/* Brand Name */}
          <div className="flex justify-between mr-2">
            <div className="text-sm mb-3">{bname}</div>
            <div>
              <FaInstagram />
            </div>
          </div>
          
          {/* Barter Details */}
          <div className="text-xs text-gray-500">{payout} worth</div>
          <div className="text-sm mb-2">INR {price}</div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-1">
            <div className="h-3 rounded-lg w-3/4 bg-gray-300 overflow-hidden relative">
              <div
                className={`h-full ${getProgressBarColor()}`}
                style={{ width: getProgressBarWidth() }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              {hired}/{outofhired}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
