/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import ReactStarsRating from "react-awesome-stars-rating";
import { RotatingTriangles } from "react-loader-spinner";

const CollegeDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const {
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
    _id,
    admission_process,
    total_research,
    rating,
    sports_details
  } = data;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20 items-center mx-auto max-w-7xl">
      <div>
        <img src={college_image} className="w-[620px] h-[450px]" alt="" />
      </div>

      <div className="p-3 text-my-p text-justify">
        <h3 className="text-3xl font-semibold my-5 text-center">
          Details of <span className="text-my-primary">{college_name}</span>
        </h3>

        <div className="divider"></div>
        {/* <h3 className="text-3xl mb-4 font-semibold text-my-text">
          {college_name}
        </h3> */}
        <p className="text-[#28cd28] font-semibold">
          <span className="font-semibold text-my-text">Admission Open: </span>
          {admission_dates}
        </p>

        <p className="my-3">
          <span className="font-semibold text-my-text">Events: </span>
          {events}
        </p>
        <p>
          <span className="font-semibold text-my-text">Research: </span>
          {research_history}
        </p>

        <p className="my-3">
          <span className="font-semibold text-my-text">Sports: </span>
          {sports}
        </p>
        <p className="my-3">
          <span className="font-semibold text-my-text">Sports Facilities: </span>
          <span>{sports_details}</span>
        </p>

        <p>
          <span className="font-semibold text-my-text">
            Admission Process:{" "}
          </span>
          {admission_process}
        </p>

        <div className="lg:flex justify-between items-center">
          <p>
            <span className="font-semibold text-my-text">Research Pager: </span>
            {total_research}
          </p>
          <p className="flex items-center gap-2">
            <ReactStarsRating
              className="flex my-5"
              isEdit={false}
              value={rating}
            />
            <span>{rating}</span>
          </p>

          <div className="flex justify-center my-5">
          <Link
            to={`/admission/${_id}`}
            className="uppercase apply-btn text-my-text"
          >
            Apply Now
          </Link>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default CollegeDetails;
