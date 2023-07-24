/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import "./ResearchPaper.css";

const ResearchPaper = () => {
  return (
    <div>
      <SectionTitle title={"Research Paper"} subTitle={""}></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        

        <div className="relative mx-5 lg:mx-auto">
          <img
            src="https://www.insidehighered.com/sites/default/files/media/file-picture-id696301002.jpg"
            alt=""
            className="w-auto h-[400px]"
          />

          <div className="overlay bg-opacity-50"></div>
          <div className="px-3 text-white overlay-content">
            <h3 className="text-2xl font-semibold my-3">
              Research paper ABC
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Publish: 12 July 2022</p>
              <Link className="apply-btn font-semibold">View</Link>
            </div>
          </div>
        </div>

        <div className="relative mx-5 lg:mx-auto">
          <img
            src="https://www.prostudyguides.com/wp-content/uploads/2020/09/All-Types-of-Research-Papers-in-English.jpg"
            alt=""
            className="w-auto h-[400px]"
          />

          <div className="overlay bg-opacity-50"></div>
          <div className="px-3 text-white overlay-content">
            <h3 className="text-2xl font-semibold my-3">
              Research paper XYZ
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Publish: 7 May 2023</p>
              <Link className="apply-btn font-semibold">View</Link>
            </div>
          </div>
        </div>

        <div className="relative mx-5 lg:mx-auto">
          <img
            src="https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/Writing%20research%20papers%20in%20English%20A%20guide%20for%20non-native%20speakers%20%28original%29_0.jpg?itok=jeMRxuob"
            alt=""
            className="w-auto h-[400px]"
          />

          <div className="overlay bg-opacity-50"></div>
          <div className="px-3 text-white overlay-content">
            <h3 className="text-2xl font-semibold my-3">
              Research paper ABC
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Publish: 3 August 2021</p>
              <Link className="apply-btn font-semibold">View</Link>
            </div>
          </div>
        </div>

        <div className="relative mx-5 lg:mx-auto">
          <img
            src="https://www.thoughtco.com/thmb/fytBUcjzmxHxCmIQBSIzNefzPIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/laptop-computer-with-books--pen-and-yellow-legal-pad-92259124-5c673ef9c9e77c00014762dc.jpg"
            alt=""
            className="w-auto h-[400px]"
          />

          <div className="overlay bg-opacity-50"></div>
          <div className="px-3 text-white overlay-content">
            <h3 className="text-2xl font-semibold my-3">
              Research paper XYZ
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Publish: 10 June 2022</p>
              <Link className="apply-btn font-semibold">View</Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ResearchPaper;
