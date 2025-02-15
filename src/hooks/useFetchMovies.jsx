import { useEffect, useState } from "react";
import {
  fetchTrendingAll,
  fetchMoviesPopular,
  fetchSeriesPopular,
} from "../services/api";

export const useFetchMovies = (endpoint) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      let data;

      switch (endpoint) {
        case "trendingAll":
          data = await fetchTrendingAll();
          break;

        case "moviesPopular":
          data = await fetchMoviesPopular();
          break;

        case "seriesPopular":
          data = await fetchSeriesPopular();
          break;
      }

      setMovies(data);
    } catch (error) {
      setMovies([]);

      console.error(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, [endpoint]);

  return { movies };
};
