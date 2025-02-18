import { useEffect, useState } from "react";
import {
  fetchTrendingAll,
  fetchMoviesPopular,
  fetchSeriesPopular,
  fetchDetailMovie,
  fetchDetailSeries,
} from "../services/api";

export const useFetchMovies = (endpoint, id) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovies = async () => {
    try {
      let data;

      switch (endpoint) {
        case "trendingAll":
          data = await fetchTrendingAll();
          setMovies(data);
          break;

        case "moviesPopular":
          data = await fetchMoviesPopular();
          setMovies(data);
          break;

        case "movieDetail":
          data = await fetchDetailMovie(id);
          setMovie(data);
          break;

        case "seriesPopular":
          data = await fetchSeriesPopular();
          setMovies(data);
          break;

        case "seriesDetail":
          data = await fetchDetailSeries(id);
          setMovie(data);
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, [endpoint, id]);

  return { movies, movie };
};
