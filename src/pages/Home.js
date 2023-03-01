import React, { Fragment, useEffect } from "react";
import PlaylistCard from "../components/Cards/PlaylistCard";
import GenreSection from "../components/Sections/Genre";
import TopArtistsSection from "../components/Sections/TopArtists";
import TrackOfTheWeekSection from "../components/Sections/TrackOfTheWeek";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Fragment>
      {/* Music Cards */}
      <div className=" mt-7 gap-5 flex-wrap hidden xl:flex">
        <PlaylistCard backgroundColor="bg-purple-400" />
        <PlaylistCard backgroundColor="bg-blue-600" />
        <PlaylistCard backgroundColor="bg-yellow-400" />
        <PlaylistCard backgroundColor="bg-orange-600" />
        <PlaylistCard backgroundColor="bg-yellow-400" />
      </div>

      {/* Music Section */}
      <div className="flex flex-col md:flex-row mt-3 md:mt-8 p-1 gap-0  md:gap-5">
        <div className="basis-1/5 hidden lg:block">
          <GenreSection />
        </div>
        <div className="basis-9/12 lg:basis-3/5 text-white ">
          <TrackOfTheWeekSection />
        </div>
        <div className="basis-3/12 lg:basis-1/5 ">
          <TopArtistsSection />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
