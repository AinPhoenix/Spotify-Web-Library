import React from "react";

import { FaPlay } from "react-icons/fa";
import listening from "./../../Assets/images/listening.png";

const PlaylistCard = ({ backgroundColor }) => {
  return (
    <div
      className={`flex justify-center items-center relative border-none rounded-[35px] w-[230px] h-[325px] ${backgroundColor}`}
    >
      {/* Background */}
      <img src={listening} className="rounded-3xl w-full h-auto" alt="card" />
      {/* Content */}
      <div className="absolute bottom-0 top-0 w-full flex flex-col items-center justify-between">
        <p className="p-6 text-sm font-bold text-left w-full">25 Tracks</p>
        <div className="flex flex-row justify-center items-center mb-8 space-x-3  backdrop-blur-sm w-full">
          <div className="flex justify-center items-center bg-primary w-10 h-10 rounded-full text-sm">
            <FaPlay />
          </div>
          <div className="flex flex-col text-sm ">
            <p className="font-bold">Release Radar</p>
            <p className="font-light text-xs">Update Every Friday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
