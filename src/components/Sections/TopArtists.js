import React, { Fragment } from "react";
import { useGetTopArtistsQuery } from "../../store/services/spotify";

const TopArtistsSection = () => {
  const { data, isLoading, error } = useGetTopArtistsQuery();

  if (error) {
    return;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const imageUrls = data.items.reduce((prev, item) => {
    return [...prev, item.images[0].url];
  }, []);

  return (
    <Fragment>
      <h3 className="font-bold text-4xl md:text-xl my-4">Your Top Artists</h3>
      <div className="flex flex-wrap justify-around items-center ">
        <div className="w-full my-1 rounded-lg">
          <img
            src={imageUrls[0]}
            alt=""
            className="h-40 w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full my-1 rounded-lg">
          <img
            src={imageUrls[1]}
            alt=""
            className="h-40 w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full my-1 rounded-lg">
          <img
            src={imageUrls[2]}
            alt=""
            className="h-40 w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full my-1 rounded-lg">
          <img
            src={imageUrls[3]}
            alt=""
            className="h-40 w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TopArtistsSection;
