/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { RotatingTriangles } from "react-loader-spinner";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/colleges`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  if (colleges.length == 0) {
    return (
      <div className="flex justify-center pt-28">
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{}}
          wrapperClass="rotating-triangels-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="pt-14 max-w-7xl mx-auto">
      <SectionTitle title={"Admission Open"}></SectionTitle>

      <div className="px-20">
        {colleges.map((c) => (
          <>
            <div className="flex justify-between items-center my-5 bg-my-bg2 ">
              <div className="w-[40%] h-[200px]">
                <img
                  src={c.college_image}
                  alt=""
                  className="h-full w-full"
                />
              </div>

              <div className="font-semibold">
                <Link
            to={`/admission/${c._id}`} className="text-3xl my-2">{c.college_name}</Link>
                <p className="text-lg my-2">
                  Admission Open: {c.admission_dates}
                </p>
                <p className="flex items-center gap-2">
                  <ReactStarsRating
                    className="flex my-2"
                    isEdit={false}
                    value={c.rating}
                  />
                  <span>{c.rating}</span>
                </p>
              </div>

              <div className="px-14 flex flex-col">
                <Link to={`/colleges/${c._id}`} className="uppercase apply-btn my-2 ">View Details</Link>
                <Link to={`/admission/${c._id}`} className="uppercase apply-btn my-2 ">Apply Now</Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Admission;
