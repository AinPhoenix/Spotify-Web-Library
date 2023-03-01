import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: true };

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const uiActions = uiSlice.actions;
export const UIReducer = uiSlice.reducer;
