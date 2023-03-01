import React, { Fragment } from "react";
import { BounceLoader } from "react-spinners";
import { useGetGenreQuery } from "../../store/services/spotify";
import { checkError } from "../../utils/errors";
import LoadingSection from "./Loading";

const GenreSection = () => {
  const { data, isLoading, error } = useGetGenreQuery();

  if (error) {
    checkError(error);
    return;
  }

  let items = [];

  if (!isLoading) {
    items = data.categories.items;
  } else {
    return <LoadingSection />;
  }

  return (
    <Fragment>
      <h3 className="font-bold text-4xl md:text-xl my-4">Genres</h3>
      {isLoading && <BounceLoader color="#36d7b7" />}
      {!isLoading && (
        <div className="flex flex-wrap gap-1 my-4">
          {items.map((item) => {
            return (
              <p
                key={item.id}
                className="p-2 px-4 text-sm dark:text-zinc-300 font-bold bg-white text-black dark:bg-darkgray rounded-xl border-lightgray  tracking-wide border-2"
              >
                {item.name}
              </p>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default GenreSection;
