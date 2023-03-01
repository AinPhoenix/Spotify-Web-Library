import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./playerSlice";
import { spotifyApi } from "./services/spotify";
import { UIReducer } from "./uiSlice";

const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    player: playerReducer,
    ui: UIReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});

export default store;
