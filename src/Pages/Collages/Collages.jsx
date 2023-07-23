/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CollegeCardsSection from "../MainLayout/Home/CollegeCardsSection/CollegeCardsSection";

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

  return (
    <div className="py-16 max-w-7xl mx-auto">
      <CollegeCardsSection colleges={colleges}></CollegeCardsSection>
    </div>
  );
};

export default Collages;
