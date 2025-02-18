import React from "react";
import { useParams } from "react-router";
import { useFetchMovies } from "../hooks/useFetchMovies";

const MovieDetail = () => {
  const imgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const { id } = useParams();
  const { movie, fallback_image_url, isLoading, error } = useFetchMovies(
    "movieDetail",
    id
  );

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">
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

        {/* bagian Poster dan informasi film */}
        {!isLoading && !error && movie && (
          <div className="flex flex-col md:flex-row gap-8">
            {/* poster */}
            <div className="flex-shrink-0">
              <img
                src={
                  movie?.poster_path
                    ? `${imgUrl}${movie.poster_path}`
                    : `${fallback_image_url}`
                }
                alt={movie?.title || "Movie Poster"}
                className="rounded-lg w-full md:w-[300px]"
              />
            </div>

            {/* informasi */}
            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>
              <p className="text-gray-400 mb-4">{movie?.tagline}</p>

              {/* rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl mr-2">⭐</span>
                <span className="text-white">
                  {movie?.vote_average?.toFixed(1)}
                </span>
                <span className="text-gray-400 ml-2">
                  ({movie?.vote_count} votes)
                </span>
              </div>

              {/* genre */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie?.genres?.map((genre) => (
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
                <p className="text-gray-300">{movie?.overview}</p>
              </div>

              {/* informasi tambahan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Release Date</h3>
                  <p className="text-gray-300">{movie?.release_date}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Runtime</h3>
                  <p className="text-gray-300">{movie?.runtime} minutes</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
