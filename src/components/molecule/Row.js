import React from "react";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../constants/axios";
import "../../styles/Row.css";
import movieTrailer from "movie-trailer";
import { VideoResolution } from "../../constants/VideoResolution";
import { MovieRowRender } from "../atom/MovieRowRender";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  function handelClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <MovieRowRender movies={movies} isLargeRow={isLargeRow} handelClick={handelClick} />
      {trailerUrl && <YouTube videoId={trailerUrl} opts={VideoResolution} />}
    </div>
  );
}

export default Row;