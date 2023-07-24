/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CollegeCardsSection from "../MainLayout/Home/CollegeCardsSection/CollegeCardsSection";
import { RotatingTriangles } from "react-loader-spinner";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useTitle from "../../Hooks/useTitle";

const Collages = () => {
  useTitle("Colleges");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`https://educate-yourself-server-side.vercel.app/colleges`)
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
    <div className="py-10 max-w-7xl mx-auto">
      <SectionTitle title={"Visit top ranked colleges"}></SectionTitle>
      <CollegeCardsSection colleges={colleges}></CollegeCardsSection>
    </div>
  );
};

export default Collages;
