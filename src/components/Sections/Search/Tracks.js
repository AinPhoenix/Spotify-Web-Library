import React from "react";
import { useSelector } from "react-redux";
import SongBar from "../../Cards/SongBar";

const TracksSection = ({ tracks }) => {
  const { items } = tracks;

  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <div className="sm:w-full md:w-[50%]">
      <h2 className="text-5xl md:text-3xl w-full font-bold p-3">Tracks</h2>
      <div className="shadow-sm rounded-xl shadow-black">
        {items.slice(0, 5).map((item) => {
          return (
            <SongBar
              key={item.id}
              image={item.album.images[0].url}
              artists={item.artists}
              songName={item.name}
              songUri={item.uri}
              currentTrack={currentTrack === item.uri}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TracksSection;
