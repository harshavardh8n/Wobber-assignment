import React from 'react'
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between text-xl p-5 border-b'>
        <div className='font-semibold'>
        Hi, Wobber
        </div>
        <div>
        <IoIosNotifications size={24}/>
        </div>
    </div>
  )
}

export default Navbar