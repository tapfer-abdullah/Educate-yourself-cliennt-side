/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CollegeCardsSection from "../MainLayout/Home/CollegeCardsSection/CollegeCardsSection";
import { RotatingTriangles } from "react-loader-spinner";

const Collages = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/colleges`)
      // fetch(`https://toy-box-server.vercel.app/all-toys?limit=${limit}&name=${search}`)
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
    <div className="py-16 max-w-7xl mx-auto">
      <CollegeCardsSection colleges={colleges}></CollegeCardsSection>
    </div>
  );
};

export default Collages;
