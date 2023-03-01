import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ArtistsSection = ({ artists }) => {
  const { items } = artists;

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
        <h2 className="text-3xl w-full font-bold p-3 ">Artists</h2>
        <div className="space-x-3 text-2xl cursor-pointer  hidden md:flex">
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
            if (item.images.length === 0) {
              return "";
            }

            return (
              <div key={item.id} className="flex flex-col justify-center items-center w-[100px] md:w-[200px] hover:scale-105 duration-200">
                <img src={item.images[0]?.url} alt={item.name} className="w-[75px] rounded-full shadow-sm shadow-white object-cover h-[75px]" />
                <div className="p-1 flex justify-center items-center">
                  <h5 className="text-xs font-bold whitespace-nowrap overflow-hidden  text-ellipsis w-36 flex py-2 items-center justify-center">{item.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistsSection;
