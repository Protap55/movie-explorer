import React from "react";
import Banner from "../../Component/Banner/Banner";
import FaqSection from "../../Component/FaqSection/FaqSection";
import MovieStatistics from "../../Component/MovieStatistics/MovieStatistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MovieStatistics></MovieStatistics>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
