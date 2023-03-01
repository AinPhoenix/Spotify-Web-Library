import React, { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

import { Buffer } from "buffer";

const clientId = process.env.REACT_APP_CLIENT_ID;

// const redirectUri = process.env.REACT_APP_TEST_REDIRECT_URL;
const redirectUri = process.env.REACT_APP_BUILD_REDIRECT_URL;

const scopes =
  "user-read-private user-read-email playlist-read-private playlist-read-collaborative streaming user-read-private user-library-read user-top-read user-read-playback-state user-modify-playback-state streaming";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "login";
  }, []);

  const onLoginHandler = () => {
    const queryParams = {
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      scope: scopes,
    };

    const queryString = new URLSearchParams(queryParams).toString();
    const loginUrl = `https://accounts.spotify.com/authorize?${queryString}`;

    console.log(loginUrl);
    window.location = loginUrl;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark">
      {/* <a
        href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
          scopes
        )}&response_type=token`}
        className="bg-primary text-white p-4 rounded-lg flex items-center justify-center space-x-4  hover:-translate-y-1 hover:scale-110 duration-200"
      >
        <FaSpotify className="text-3xl " />
        <span>Login with Spotify</span>
      </a> */}

      <button
        onClick={onLoginHandler}
        className="bg-primary text-white p-4 rounded-lg flex items-center justify-center space-x-4  hover:-translate-y-1 hover:scale-110 duration-200"
      >
        <FaSpotify className="text-3xl " />
        <span>Login with Spotify</span>
      </button>
    </div>
  );
};

export default LoginPage;

export const loader = async ({ request }) => {
  const urlHash = window.location.hash;

  if (getAuthToken()) {
    return redirect("/");
  }

  if (urlHash !== "") {
    // const paramsList = urlHash.slice(1, urlHash.length).split("&");
    // const params = paramsList.reduce((prev, val) => {
    //   const arr = val.split("=");
    //   const key = arr[0];
    //   const value = arr[1];
    //   return { ...prev, [key]: value };
    // }, {});
    // localStorage.setItem("token", params.access_token);
    // const expiration = new Date();
    // expiration.setHours(expiration.getHours() + 1);
    // localStorage.setItem("expiration", expiration.toISOString());
    // console.log(params);
    // return redirect("/");
  }

  if (window.location.search !== "") {
    const code = window.location.search.slice(1, window.location.search.length).split("=")[1];

    const tokenUrl = "https://accounts.spotify.com/api/token";
    const basic = `Basic ${Buffer.from(`${clientId}:${process.env.REACT_APP_CLIENT_SECRET}`).toString("base64")}`;

    console.log(basic);

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: basic,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await response.json();

    console.log(data.access_token);

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      return redirect("/");
    }
  }

  return null;
};
