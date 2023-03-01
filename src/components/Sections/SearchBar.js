import React, { Fragment, useState } from "react";
import { FaRegCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Buttons/Logout";

const SearchBarSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const inputKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="flex w-full justify-between p-2 md:p-3">
      <div className="basis-11/12 lg:basis-11/12 text-sm gpa dark:bg-darkgray p-3  md:p-4 rounded-full flex flex-row justify-center items-center border  md:border-2 border-lightgray ">
        <div className="flex items-center justify-center w-full flex-row-reverse">
          <input
            type="text"
            className="w-full text-xs md:text-sm font-bold  dark:text-white  dark:bg-darkgray focus:outline-none peer ml-3 md:ml-4  dark:placeholder:text-gray-200 placeholder:font-bold"
            placeholder="Search album, artist or track"
            value={searchTerm}
            onChange={searchChangeHandler}
            onKeyDown={inputKeyDownHandler}
          />
          <FaRegCircle className="text-md md:text-lg font-extrabold text-black dark:text-white peer-focus:text-primary peer-focus:animate-pulse duration-75 ml-2" />
        </div>
        <button className="pr-1 md:pr-5" onClick={searchHandler}>
          <FaSearch className="text-sm md:text-lg  hover:text-primary duration-150" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarSection;
