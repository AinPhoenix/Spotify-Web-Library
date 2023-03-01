import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
};

export const checkAuthLoader = async () => {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    localStorage.removeItem("token");
    return redirect("/login");
  }

  return null;
};
