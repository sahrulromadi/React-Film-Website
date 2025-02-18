import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const APIKey = import.meta.env.VITE_TMDB_API_KEY;

// gunakan axios instance untuk meminimalisir duplikasi
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${APIKey}`,
  },
});

export const fetchTrendingAll = async () => {
  try {
    const response = await axiosInstance.get(`${baseURL}trending/all/day`, {
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

export const fetchMoviesPopular = async () => {
  try {
    const response = await axiosInstance.get(`${baseURL}movie/popular`, {
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
    const response = await axiosInstance.get(`${baseURL}tv/popular`, {
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

export const fetchDetailMovie = async (id) => {
  try {
    const response = await axiosInstance.get(`${baseURL}movie/${id}`, {
      params: {
        language: "en-US",
        page: 1,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDetailSeries = async (id) => {
  try {
    const response = await axiosInstance.get(`${baseURL}tv/${id}`, {
      params: {
        language: "en-US",
        page: 1,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchMulti = async (query) => {
  try {
    const response = await axiosInstance.get(`${baseURL}search/multi`, {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });

    const filteredResults = response.data.results.filter(
      (item) => item.media_type === "movie" || item.media_type === "tv"
    );
  
    return filteredResults;
  } catch (error) {
    throw error;
  }
};
