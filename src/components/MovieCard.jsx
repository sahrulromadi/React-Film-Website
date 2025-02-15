import React from "react";

export const MovieCard = ({ data, title }) => {
  const imgUrl = import.meta.env.VITE_BASE_IMG_URL;

  return (
    <div className="items space-y-2 flex-shrink-0 w-[150px] h-[300px] flex flex-col md:w-[200px]">
      <div className="overflow-hidden rounded-2xl w-full h-[250px] relative">
        <img
          src={
            data.poster_path
              ? `${imgUrl}${data.poster_path}`
              : "fallback_image_url"
          }
          alt={`cover-${title}`}
          className="transition-all duration-300 transform hover:scale-110 w-full h-full object-cover filter hover:brightness-50"
        />
      </div>
      <p className="font-semibold overflow-hidden text-ellipsis h-[50px] text-white">
        {title}
      </p>
    </div>
  );
};
