import React from "react";
import { Card } from "../../components/Card";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { Link } from "react-router";

const MoviesPopular = () => {
  const { movies, isLoading, error } = useFetchMovies("moviesPopular");

  return (
    <section className="px-7 space-y-5 text-white md:px-20">
      <div className="title flex justify-between">
        <h3 className="font-bold text-xl">Popular Movies</h3>
        <Link
          to="/movies"
          className="border border-white rounded-xl bg-transparent px-5 transition duration-300 hover:bg-white hover:text-black"
        >
          View More
        </Link>
      </div>

      {isLoading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="flex whitespace-nowrap overflow-x-auto gap-4 scrollbar-hide">
        {/* items */}
        {!isLoading &&
          !error &&
          movies.map((data) => (
            <Card data={data} key={data.id} type={"movies"} />
          ))}
        {/* items end */}
      </div>
    </section>
  );
};

export default MoviesPopular;
