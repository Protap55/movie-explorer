import { useState } from "react";
import { useEffect } from "react";

const useMoviesData = ({ search }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const showUrl = "https://api.tvmaze.com/shows";
    const searchUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
      search,
    )}`;

    const url = search ? searchUrl : showUrl;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch shows");
        }

        return res.json();
      })
      .then((data) => {
        const shows = search ? data.map((item) => item.show) : data;

        setMoviesData(shows);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMoviesData([]);
        setIsLoading(false);
      });
  }, [search]);

  return { moviesData, isLoading };
};

export default useMoviesData;
