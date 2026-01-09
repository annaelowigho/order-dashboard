import React from "react";
import Burger from "/images/burger-emoticon.png";
import { IoIosSearch, IoIosArrowDown, IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <>
        <header className="bg-white sticky top-0 z-30 w-full">
          <div className="flex items-center justify-between px-10 py-3 mb-0.5">
            <div className="bg-[#F6F6FB] px-3.5 py-2.5 rounded-md w-full lg:w-[600px] flex items-center justify-between">
              <input type="text" placeholder="Search" className="text-[12px] text-[#1F384C] outline-none"/>
              <IoIosSearch className="text-[#627B87]"  />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFE6CC] rounded-full flex items-center justify-center">
                <img src={Burger} alt="Burger" className="" />
              </div>
              <div className="flex items-center gap-1 text-[12px] text-[#1F384C]">
                <p>Delicious Burger</p>
                <IoIosArrowDown />
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <IoMdNotifications className="text-[#B0C3CC] text-[20px]" />
                <span className="absolute top-2 right-3 w-1.5 h-1.5 bg-[#EC5252] rounded-full"></span>
              </button>
            </div>
          </div>
          <hr className="border border-[#C8CBD9]" />
        </header>
    </>
  );
};

export default Header;
