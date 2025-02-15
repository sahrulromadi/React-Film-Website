import React from "react";
import Hero from "./sections/Hero";
import MoviesPopular from "./sections/MoviesPopular";
import SeriesPopular from "./sections/SeriesPopular";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-10 pb-10 bg-background bg-black">
      <Hero />
      <MoviesPopular />
      <SeriesPopular />
    </main>
  );
};

export default Home;
