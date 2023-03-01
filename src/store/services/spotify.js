import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const spotifyApi = createApi({
  reducerPath: "spotify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      const token = getAuthToken();
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (searchTerm) => {
        return {
          url: "search",
          params: {
            q: searchTerm,
          },
        };
      },
    }),
    getRecomendedTrack: builder.query({
      query: () => {
        return {
          url: "recommendations",
          params: {
            limit: 10,
            seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
            seed_genres: "classical,country",
            seed_tracks: "0c6xIDDpzE81m2q797ordA",
          },
        };
      },
    }),
    getGenre: builder.query({
      query: () => {
        return {
          url: "browse/categories",
          params: {
            limit: 10,
          },
        };
      },
    }),
    getTopTracks: builder.query({
      query: () => {
        return {
          url: "me/top/tracks",
          params: {
            limit: 20,
          },
        };
      },
    }),
    getTopArtists: builder.query({
      query: () => {
        return {
          url: "me/top/artists",
          params: {
            limit: 4,
          },
        };
      },
    }),
    playTrack: builder.mutation({
      query: () => {
        return {
          url: "me/player/play",
          method: "PUT",
        };
      },
    }),
  }),
});

export const {
  useGetRecomendedTrackQuery,
  useGetGenreQuery,
  useGetTopTracksQuery,
  useGetTopArtistsQuery,
  useSearchQuery,
  usePlayTrackMutation,
} = spotifyApi;
