import React, { useRef } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const AlbumsSection = ({ albums }) => {
  const { items } = albums;

  const leftScroll = useRef();

  const scrollLeft = () => {
    leftScroll.current.scrollLeft -= 500;
  };
  const scrollRight = () => {
    leftScroll.current.scrollLeft += 500;
  };

  return (
    <div className="flex flex-col text-black dark:text-white w-full relative">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl w-full font-bold p-3 text-black dark:text-white ">Albums</h2>
        <div className="space-x-3 text-2xl cursor-pointer hidden md:flex">
          <div onClick={scrollLeft}>
            <FaAngleLeft />
          </div>
          <div onClick={scrollRight}>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div id="albumContent" className="w-full">
        <div className="carousel flex items-center justify-start overflow-x-auto scroll-smooth space-x-5 scrollbar-hide px-1 py-3" ref={leftScroll}>
          {items.map((item) => {
            return (
              <div key={item.id} className="w-[100px] md:w-[300px] hover:scale-105 duration-200">
                <img src={item.images[0].url} alt={item.name} className="rounded-xl shadow-sm shadow-white w-[100px] md:w-[300px]" />
                <div className="p-1">
                  <h5 className="text-xs font-bold whitespace-nowrap overflow-hidden  text-ellipsis w-36 ">{item.name}</h5>
                  <p className="font-light text-zinc-700 dark:text-zinc-400 text-xs">{item.album_type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlbumsSection;
