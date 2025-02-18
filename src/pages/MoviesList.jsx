import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { Card } from "../components/Card";

const MoviesList = () => {
  const { movies, isLoading, error } = useFetchMovies("moviesPopular");

  return (
    <div className="md:container mx-auto px-4 pt-4 pb-8">
      <h1 className="text-4xl text-center font-bold text-white mb-20">
        Movies List
      </h1>

      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <p className="text-white text-2xl">Loading...</p>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center py-10">
          <p className="text-red-500 text-2xl">Error: {error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} data={movie} type={"movies"} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
