import React from "react";

import { FaPlay } from "react-icons/fa";

import { TbActivityHeartbeat } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/playerSlice";

const SongBar = ({ image, artists, songName, songUri, currentTrack }) => {
  const dispatch = useDispatch();

  const artistsList = artists.reduce((prev, name) => {
    return [...prev, name.name];
  }, []);

  const artistsName = artistsList.join(", ");

  const onPlayHandler = () => {
    dispatch(playerActions.setSong(songUri));
  };

  return (
    <div className="flex p-5 justify-between items-center rounded-lg hover:bg-lightgray hover:text-black group cursor-pointer">
      <div className="flex gap-2">
        <img src={image} className="w-[50px] h-[50px] rounded-lg" alt={artistsName} />
        <div className="flex flex-col  justify-center">
          <h4 className="text-sm font-bold text-black dark:text-white">{artistsName}</h4>
          <p className="text-xs font-light text-lightgray group-hover:text-black ">{songName}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {/* <div className="justify-center items-center space-x-2 text-zinc-200 text-xs hidden md:flex">
          <FaHeadphonesAlt /> <span>274K</span>
        </div> */}
        <div
          className={`flex w-[40px] h-[40px] items-center justify-center text-xs rounded-full cursor-pointer  border ${
            currentTrack ? "border-primary border-2" : "border-zinc-400 group-hover:border-black"
          }`}
          onClick={onPlayHandler}
        >
          {!currentTrack ? <FaPlay className="text-black dark:text-white" /> : <TbActivityHeartbeat className="text-xl text-primary" />}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SongBar);
