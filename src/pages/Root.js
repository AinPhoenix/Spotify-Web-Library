import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCompass, FaMicrophoneAlt, FaRegCircle, FaSearch, FaSpotify } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import DarkModeToggleButton from "../components/Buttons/DarkModeToggle";
import LogoutButton from "../components/Buttons/Logout";
import Logo from "../components/Icons/Logo";
import PlayerSection from "../components/Sections/Player";
import SearchBarSection from "../components/Sections/SearchBar";

const Root = () => {
  const darkToggle = useSelector((state) => state.ui.darkMode);
  console.log(darkToggle);
  return (
    <Fragment>
      <div className={`${darkToggle && "dark"}`}>
        {/* Display Section */}
        <div className={`flex flex-row w-full justify-start min-h-screen bg-background-white dark:bg-background-dark text-black dark:text-white `}>
          {/* Side Menu */}
          <div className="w-[15%] md:w-[10%] lg:w-[5%] flex flex-col justify-start items-center ">
            <div className="sticky top-0 pt-5 md:pt-5 flex flex-col h-screen justify-start items-center">
              {/* Logo */}
              <Link to="/" className="pb-8 text-4xl md:text-5xl  ">
                <Logo />
              </Link>

              {/* Navbar */}
              <div className="flex flex-col text-xl justify-between items-center h-[70%] ">
                <div className="flex flex-col space-y-5">
                  <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary duration-150 hover:text-primary dark:text-primary" : "text-primary")}>
                    <AiFillHome />
                  </NavLink>
                  <div className="duration-150 hover:text-primary text-primary dark:text-primary">
                    <a>
                      <FaCompass />
                    </a>
                  </div>
                  <div className="duration-150 hover:text-primary text-primary dark:text-primary hover:cursor-pointer">
                    <a>
                      <FaMicrophoneAlt />
                    </a>
                  </div>
                  <div className="duration-150 hover:text-primary text-primary dark:text-primary hover:cursor-pointer">
                    <DarkModeToggleButton />
                  </div>

                  <div className="duration-150 hover:text-primary text-primary hover:cursor-pointer">
                    <a>
                      <FiMoreHorizontal />
                    </a>
                  </div>
                </div>

                <div className="duration-150 hover:text-primary text-primary hover:cursor-pointer  flex justify-center items-center border border-lg rounded-lg p-2 border-primary">
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="w-[85%] md:w-[95%] flex flex-col pt-2 pb-44 md:pb-24 justify-start">
            {/* Searchbar */}
            <SearchBarSection />
            <Outlet />
          </div>
        </div>

        {createPortal(<PlayerSection />, document.getElementById("player"))}
      </div>
    </Fragment>
  );
};

export default Root;
