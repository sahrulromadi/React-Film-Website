import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router";
import MoviesList from "./pages/MoviesList";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
