import React from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { Card } from "../../components/Card";
import { Link } from "react-router";

const SeriesPopular = () => {
  const { movies: series } = useFetchMovies("seriesPopular");

  return (
    <section className="px-7 space-y-5 text-white md:px-20">
      <div className="title flex justify-between">
        <h3 className="font-bold text-xl">Popular TV Series</h3>
        <Link
          to="/series"
          className="border border-white rounded-xl bg-transparent px-5 transition duration-300 hover:bg-white hover:text-black"
        >
          View More
        </Link>
      </div>
      <div className="flex whitespace-nowrap overflow-x-auto gap-4 scrollbar-hide">
        {/* items */}
        {series &&
          series.map((data, index) => (
            <Card data={data} key={index} type={"series"} />
          ))}
        {/* items end */}
      </div>
    </section>
  );
};

export default SeriesPopular;
