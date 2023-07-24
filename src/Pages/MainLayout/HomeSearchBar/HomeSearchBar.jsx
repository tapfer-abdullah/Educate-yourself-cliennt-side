/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CollegeCardsSection from "../Home/CollegeCardsSection/CollegeCardsSection";

const HomeSearchBar = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://educate-yourself-server-side.vercel.app/colleges?name=${search || 0}`)
      // fetch(`https://toy-box-server.vercel.app/all-toys?limit=${limit}&name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, [search]);

  // console.log(colleges);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
    // console.log(searchItem);
  };

  return (
    <div>
      <div className="pt-16 pb-2 bg-my-secondary flex justify-center">
        <div className="">
          <div className="input-group">
            <input
              onChange={handleSearch}
              type="text"
              name="search"
              placeholder="Search Collage"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`py-10 max-w-7xl mx-auto ${colleges.length == 0 && "hidden"}`}>
        <CollegeCardsSection colleges={colleges}></CollegeCardsSection>
      </div>
    </div>
  );
};

export default HomeSearchBar;
