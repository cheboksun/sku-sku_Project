import Header from "./hyunwoo/Header.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./boksun/MainPage";
import Footer from "./hyunwoo/Footer.jsx";
import Project from "./nayeon/Project.jsx";
import Team from "./hyunwoo/Team.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-[77px]">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
