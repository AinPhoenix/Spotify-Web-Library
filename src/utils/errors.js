import { redirect } from "react-router-dom";

export const checkError = (err) => {
  if (err.status === 401) {
    localStorage.removeItem("token");
    return redirect("/login");
  }
};
