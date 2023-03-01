import React from "react";
import { useNavigate } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <button className="flex items-center justify-center text-xs" onClick={onLogoutHandler}>
      {/* <span className="hidden md:block text-white dark:text-black">Logout</span> */}
      <span className="block text-lg font-bolder text-primary">
        <BiLogOut />
      </span>
    </button>
  );
};

export default LogoutButton;
