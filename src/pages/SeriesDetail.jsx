import React from "react";
import { useParams } from "react-router";
import { useFetchMovies } from "../hooks/useFetchMovies";

const SeriesDetail = () => {
  const imgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const { id } = useParams();
  const { movie: series, fallback_image_url } = useFetchMovies(
    "seriesDetail",
    id
  );

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* series */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* poster */}
          <div className="flex-shrink-0">
            <img
              src={
                series?.poster_path
                  ? `${imgUrl}${series.poster_path}`
                  : `${fallback_image_url}`
              }
              alt={series?.name}
              className="rounded-lg w-full md:w-[300px]"
            />
          </div>

          {/* informasi */}
          <div className="flex-grow">
            <h1 className="text-4xl font-bold mb-4">{series?.name}</h1>
            <p className="text-gray-400 mb-4">{series?.tagline}</p>

            {/* rating */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl mr-2">⭐</span>
              <span className="text-white">
                {series?.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-400 ml-2">
                ({series?.vote_count} votes)
              </span>
            </div>

            {/* genre */}
            <div className="flex flex-wrap gap-2 mb-4">
              {series?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* sinopsis */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Overview</h2>
              <p className="text-gray-300">{series?.overview}</p>
            </div>

            {/* informasi tambahan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">First Air Date</h3>
                <p className="text-gray-300">{series?.first_air_date}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Last Air Date</h3>
                <p className="text-gray-300">{series?.last_air_date}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Number of Episodes</h3>
                <p className="text-gray-300">{series?.number_of_episodes}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Number of Seasons</h3>
                <p className="text-gray-300">{series?.number_of_seasons}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
