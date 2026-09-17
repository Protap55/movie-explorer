import React, { useState } from "react";
import { useEffect } from "react";

const useMoviesData = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=girls")
      .then((res) => res.json())
      .then((data) => setMoviesData(data));
  }, []);

  return moviesData;
};

export default useMoviesData;
