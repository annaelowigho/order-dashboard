import { useState } from "react";
import Logo from "/images/logo.svg";
import { MdOutlineBarChart } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
          className={`
          sticky inset-y-0 left-0 z-50 w-[280px] lg:w-full bg-[#F1F2F7] h-screen
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="flex items-center justify-between px-10">
            {/* Hamburger (mobile only) */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden">
              <GiHamburgerMenu />
            </button>

            {/* Close button (mobile only) */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-lg"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          <div className="py-5">
            <img src={Logo} alt="Logo" className="px-10" />
          </div>
          <hr className="border border-[#C8CBD9]" />

          <nav className="space-y-2 pt-10 pl-10 pr-5 overflow-y-auto h-[calc(100vh-100px)]">
            <div className="text-[11px] text-[#082431] mb-4 font-semibold">
              MENU
            </div>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 bg-purple-50 text-[#5A6ACF] rounded-lg font-medium"
            >
              <MdOutlineBarChart className="bg-[#707FDD] px-2 py-1 text-white rounded-md text-[30px]" />
              <p className="text-[12px]">Dashboard</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <FaCartShopping className="text-[#A6ABC8]" />
              <p className="text-[12px]">Food Order</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <CgMenuBoxed className="text-[#A6ABC8]" />
              <p className="text-[12px]">Manage Menu</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <AiFillMessage className="text-[#A6ABC8]" />
              <p className="text-[12px]">Customer Review</p>
            </a>

            <div className="text-[11px] text-[#082431] mb-4 pt-5 font-semibold">
              OTHERS
            </div>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <IoSettingsOutline className="text-[#A6ABC8]" />
              <p className="text-[12px]">Settings</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <BiWallet className="text-[#A6ABC8]" />
              <p className="text-[12px]">Payment</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <FaUserAlt className="text-[#A6ABC8]" />
              <p className="text-[12px]">Accounts</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-[#273240] hover:bg-gray-50 rounded-lg"
            >
              <BsFillInfoSquareFill className="text-[#A6ABC8]" />
              <p className="text-[12px]">Help</p>
            </a>
          </nav>
      </aside>
    </>
  );
};

export default Sidebar;
