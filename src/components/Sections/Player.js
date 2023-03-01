import React from "react";
import { useSelector } from "react-redux";

import SpotifyPlayer from "react-spotify-web-playback";
import { getAuthToken } from "../../utils/auth";
import { colors } from "../../utils/constants";

const PlayerSection = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);
  if (currentTrack === "") {
    return;
  }

  console.log(typeof colors.primary);

  return (
    <div className="w-full bg-darkgray text-white fixed bottom-0 z-10 font-sans">
      <SpotifyPlayer
        token={getAuthToken()}
        uris={currentTrack ? [currentTrack] : []}
        play={true}
        styles={{
          bgColor: "#1A1A1A",
          color: "#ffffff",
          loaderColor: colors.primary,
          sliderColor: colors.primary,
          trackArtistColor: "#B3B3B3",
          trackNameColor: "#FFFFFF",
        }}
        layout="responsive"
        volume={0.5}
      />
    </div>
  );
};

export default PlayerSection;
