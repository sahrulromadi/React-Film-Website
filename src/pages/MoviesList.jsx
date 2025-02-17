import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MovieCard } from "../components/MovieCard";

const MoviesList = () => {
  const { movies } = useFetchMovies("moviesPopular");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold text-white mb-20">
        Movies List
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
