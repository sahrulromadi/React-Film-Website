import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router";
import MoviesList from "./pages/MoviesList";
import { Hero } from "../src/pages/sections/Hero";
import SeriesList from "./pages/SeriesList";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen space-y-10 pb-10 bg-background bg-black">
        <Hero />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesList />} />
          <Route path="series" element={<SeriesList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
