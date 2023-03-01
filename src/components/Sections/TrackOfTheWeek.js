import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useGetTopTracksQuery } from "../../store/services/spotify";
import SongBar from "../Cards/SongBar";
import LoadingSection from "./Loading";

const TrackOfTheWeekSection = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  const { data, isLoading, error } = useGetTopTracksQuery();

  if (error) {
    return;
  }

  if (isLoading) {
    return <LoadingSection />;
  }

  const { items } = data;
  return (
    <Fragment>
      <h3 className="font-bold text-4xl md:text-xl my-4 text-black dark:text-white">Your Top Tracks</h3>
      <ul className="flex flex-col my-5 bg-white dark:bg-darkgray border-lightgray-700 rounded-lg shadow-md shadow-black">
        {items.slice(0, 10).map((item) => {
          return (
            <SongBar
              key={item.id}
              artists={item.artists}
              image={item.album.images[0].url}
              songName={item.name}
              songUri={item.uri}
              currentTrack={currentTrack === item.uri}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default TrackOfTheWeekSection;
