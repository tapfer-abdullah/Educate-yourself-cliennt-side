/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./CollegeCard.css";
import ReactStarsRating from "react-awesome-stars-rating";

const CollegeCard = ({ college }) => {
  // console.log(college);
  const {
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
    _id,
    total_research,
    rating,
  } = college;
  return (
    <div className=" w-[95%] md:w-[400px] shadow-lg relative college-card">
      <div className="college-img h-60 relative">
        <div className="hover-link bg-opacity-50">
          <Link to={`/colleges/${_id}`} className="uppercase apply-btn">
            View Details
          </Link>
        </div>
        <img src={college_image} className="w-full h-full" alt="" />
      </div>

      <div className="p-3 text-my-p text-justify">
        <h3 className="text-xl mb-2 font-semibold text-my-text">
          {college_name}
        </h3>
        <p>
          <span className="font-semibold text-my-text">Admission Open: </span>
          {admission_dates}
        </p>

        <p className="my-1">
          <span className="font-semibold text-my-text">Events: </span>
          {events}
        </p>
        <p>
          <span className="font-semibold text-my-text">Research: </span>
          {research_history.length > 30 ? (
            <>
              {research_history.slice(0, 40)}
              <span className="cursor-pointer" title={research_history}>
                ...
              </span>
            </>
          ) : (
            research_history
          )}
        </p>

        <p className="my-1">
          <span className="font-semibold text-my-text">Sports: </span>
          {sports}
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
        </div>

        <div className="flex justify-center my-3">
          <Link
            to={`/colleges/${_id}`}
            className="uppercase apply-btn text-my-text md:hidden"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
