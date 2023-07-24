/* eslint-disable no-unused-vars */
import React from "react";
import CollegeImageGallery from "./CollegeImageGallery/CollegeImageGallery";
import ShowReviews from "./ShowReview/ShowReviews";
import HomeSearchBar from "../HomeSearchBar/HomeSearchBar";
import Banner from "./Banner/Banner";
import PopularColleges from "./PopularColleges/PopularColleges";
import ResearchPaper from "./ResearchPaper/ResearchPaper";
import useTitle from "../../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <HomeSearchBar></HomeSearchBar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <PopularColleges></PopularColleges>
        <CollegeImageGallery></CollegeImageGallery>
        <ResearchPaper></ResearchPaper>
        <ShowReviews></ShowReviews>
      </div>
    </div>
  );
};

export default Home;
