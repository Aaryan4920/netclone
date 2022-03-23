import React from "react";
import { useState, useEffect } from "react";
import axios from "../../constants/axios";
import requests from "../../constants/request";
import "../../styles/Banner.css";
import { BannerBackground } from "../atom/BannerBackground";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        parseInt(Math.floor(Math.random() * request.data.results.length))
        ]
      );
    }
    fetchData();
  }, []);


  return (
    <>
      <BannerBackground movie={movie} />
    </>
  );
}

export default Banner;
