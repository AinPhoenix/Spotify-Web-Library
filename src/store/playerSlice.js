import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentTrack: "" };

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
