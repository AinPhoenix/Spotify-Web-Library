import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AlbumsSection from "../components/Sections/Search/Albums";
import ArtistsSection from "../components/Sections/Search/Artists";
import TracksSection from "../components/Sections/Search/Tracks";
import { getAuthToken } from "../utils/auth";

const SearchPage = () => {
  const { albums, tracks, artists } = useLoaderData();

  const { items } = artists;
  const [topArtist] = items;

  const params = useParams();

  useEffect(() => {
    document.title = "search: " + params.searchId;
  }, [params]);

  return (
    <div className="flex p-5 w-full flex-col">
      <div className="flex justify-between flex-col-reverse md:flex-row ">
        <TracksSection tracks={tracks} />
        <div className="sm:w-full md:w-[40%] ">
          <h2 className="text-5xl md:text-3xl w-full font-bold p-3">
            Top Artist
          </h2>
          <div className="flex flex-col items-center group py-5">
            <img
              src={topArtist.images[0].url}
              alt={topArtist.name}
              className="w-[350px] rounded-2xl group-hover:scale-105 duration-150 cursor-pointer"
            />
            <h3 className="text-lg pt-2 font-extrabold">{topArtist.name}</h3>
          </div>
        </div>
      </div>

      {/* Albums */}
      <AlbumsSection albums={albums} />
      <ArtistsSection artists={artists} />
    </div>
  );
};

export default SearchPage;

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${params.searchId}&type=album%2Cartist%2Ctrack`,
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
};
