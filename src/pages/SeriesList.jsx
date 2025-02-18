import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { Card } from "../components/Card";

const SeriesList = () => {
  const { movies: series } = useFetchMovies("seriesPopular");

  return (
    <div className="md:container mx-auto px-4 pt-4 pb-8">
      <h1 className="text-4xl text-center font-bold text-white mb-20">
        TV Series List
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {series.map((series) => (
          <Card key={series.id} data={series} type={"tv"} />
        ))}
      </div>
    </div>
  );
};

export default SeriesList;
