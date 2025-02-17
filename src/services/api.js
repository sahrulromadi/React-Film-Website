import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const APIKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrendingAll = async () => {
  try {
    const response = await axios.get(`${baseURL}trending/all/day`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKey}`,
      },
      params: {
        language: "en-US",
        page: 1,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMoviesPopular = async () => {
  try {
    const response = await axios.get(`${baseURL}movie/popular`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKey}`,
      },
      params: {
        language: "en-US",
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchSeriesPopular = async () => {
  try {
    const response = await axios.get(`${baseURL}tv/popular`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKey}`,
      },
      params: {
        language: "en-US",
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};
