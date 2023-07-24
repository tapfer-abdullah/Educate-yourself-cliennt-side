/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const CollegeImageGallery = () => {
  return (
    <div className="my-40">
      <SectionTitle title={"Graduate Gallery"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <img src="https://i.ibb.co/ngGB8VX/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
        <img src="https://i.ibb.co/D4rGDKH/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
        <img src="https://i.ibb.co/vQgFfrS/image.png" alt="" className="mx-auto w-[90vw] h-[205px] lg:col-span-2 lg:row-span-2 lg:w-full lg:h-full" />
        <img src="https://i.ibb.co/X46cjmx/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
        <img src="https://i.ibb.co/3vzDvHG/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
        <img src="https://i.ibb.co/THbN9Qs/image.png" alt="" className="mx-auto w-[90vw] h-[205px] lg:w-full lg:col-span-2" />
        <img src="https://i.ibb.co/7CRpMq1/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
        <img src="https://i.ibb.co/tCZpdQq/image.png" alt="" className="mx-auto w-[90vw] lg:w-[305px] h-[205px]"/>
      </div>
    </div>
  );
};

export default CollegeImageGallery;
