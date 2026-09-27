import { useState } from "react";
import { useEffect } from "react";

const useMoviesData = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        (setMoviesData(data), setIsLoading(false));
      });
  }, []);

  return { moviesData, isLoading };
};

export default useMoviesData;
