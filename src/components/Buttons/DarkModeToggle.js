import React from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const DarkModeToggleButton = () => {
  const darkMode = useSelector((state) => state.ui.darkMode);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = () => {
    dispatch(uiActions.toggleDarkMode());
  };

  return (
    <button onClick={toggleDarkModeHandler} className="text-primary">
      {darkMode && <MdOutlineNightlight />}
      {!darkMode && <BiSun />}
    </button>
  );
};

export default DarkModeToggleButton;
