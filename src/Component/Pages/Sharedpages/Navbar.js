import React, { useState } from "react";
import { Link} from "react-router-dom";

import logo from "../../Images/QmcXNNtHWRTBTWVocSjmuJPzwBAfVJqtcW612GqmUtg9Bb 1.png";

// import { Button } from "../ui/button";
// import { Sheet, SheetTrigger } from "../ui/sheet";

// import { MdArrowOutward } from "react-icons/md";
// import { MdArrowForward } from "react-icons/md";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import MobileNav from "./MobileNav";

const Navbar = () => {
//   const [open, setopen] = useState(false);
  const pages = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "About",
      path: "/about",
    },
    {
      page: "Services",
      path: "/services",
    },
    {
      page: "Portfolio",
      path: "/portfolio",
    },
  ];

//   const location = useLocation();
//   const { pathname } = location;

//   const togglenavbar = () => {
//     setopen(!open);
  
  return (
      <div className="fixed z-[100] w-full flex items-center bg-black justify-around p-5 mb-4 font-[600] text-xl">
        <div>
            <img src={logo} alt="name"/>
        </div>
        <div className="flex  bg-[#1F1F1F80] border-gray-500 border  rounded-full justify-between items-center w-[70%]  py-3 md:py-4 px-8 z-10  top-[10px] right-0 backdrop-blur-lg">

            <ul className="gap-7 md:flex w-full items-center justify-center ">
                {pages.map((x)=>(
                    <li>
                        {/* {x.page} */}
                        <Link to={x.path} className="text-[#FFFFFFBF]">
                        {x.page}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button className="h-11 px-5  rounded-3xl  bg-[#52FF4F]">
                 Documentation
            </button>
           
        </div>

    </div>
  );
};

export default Navbar;
