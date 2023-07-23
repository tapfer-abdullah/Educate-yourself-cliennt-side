/* eslint-disable no-unused-vars */
import "./ShowReview.css";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUniversity } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ReactStarsRating from "react-awesome-stars-rating";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { RotatingTriangles } from "react-loader-spinner";

const ShowReviews = () => {

  const [review, setReview] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/reviews")
    .then(res => res.json())
    .then(data => setReview(data))
  }, [])

  if (review.length == 0) {
    return (
      <div className="flex justify-center mt-20">
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

  // console.log("aa", review)

  return (
    <>
      <SectionTitle title={"What Students Say"}></SectionTitle>

      <div className="w-full md:w-1/2 mx-auto -mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative"
        >

          {review.map(r => <><SwiperSlide>
            <div className="flex flex-col justify-center items-center p-20 w-full text-center">
              <img
                className="h-20 w-20 rounded-full my-5"
                src={r?.userImg} alt=""
              />
              <h3 className="text-lg font-semibold">{r?.name}</h3>
              <p>
                {r.review}
              </p>
              <ReactStarsRating
                className="flex my-5"
                isEdit={false}
                value={r?.ratings}
              />
              <h4 className="flex gap-2 items-center text-xl font-semibold"><FaUniversity></FaUniversity><span>{r?.college_name}</span></h4>
            </div>
          </SwiperSlide></>)}
         
        </Swiper>
      </div>
    </>
  );
};

export default ShowReviews;
