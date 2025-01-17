import React from "react";
import AllCard from "./AllCard";

const All = () => {
  const content = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 0,
      slots: 30,
      pending: true,
      payout:"Barter"
    },
    {
      image: "data:image/jpeg;base64,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",
      bimage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      bname: "Kimmy's world launch",
      price: 1096,
      hired: 5,
      slots: 115,
      pending: true,
      payout:"refunds"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 16,
      slots: 50,
      pending: true,
      payout:"fixed pay"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      bname: "Wear the Era",
      price: 1096,
      hired: 23,
      slots: 30,
      pending: true,
      payout:"fixed pay"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 30,
      slots: 30,
      pending: true,
      payout:"fixed pay"
    },

    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      bname: "Wear the Era",
      price: 10,
      hired: 55,
      slots: 30,
      pending: true,
      payout:"fixed pay"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 0,
      slots: 30,
      pending: false,
      payout:"fixed pay"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 0,
      slots: 30,
      pending: false,
      payout:"fixed pay"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJTliv0kPs7iIR0zDfkEcBz4tnrrJ_Sz0w&s",
      bimage: "https://fashion-era.com/wp-content/uploads/2018/07/Untitled-design-1.png",
      bname: "Wear the Era",
      price: 1096,
      hired: 0,
      slots: 30,
      pending: true,
      payout:"Barter"
    },
  ];

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.map((item, index) => (
          <AllCard
            key={index} // Always include a unique key for mapped components
            image={item.image}
            bname={item.bname}
            bimage={item.bimage}
            price={item.price}
            hired={item.hired}
            outofhired={item.slots}
            pending={item.pending}
            payout={item.payout}
          />
        ))}
      </div>
    </div>
  );
};

export default All;
