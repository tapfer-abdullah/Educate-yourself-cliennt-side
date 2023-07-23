/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPages/AuthProvider";
import "./MyCollage.css";
import Swal from "sweetalert2";
import { RotatingTriangles } from "react-loader-spinner";

const MyCollage = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/my-college?email=${user?.email}`)
      .then((res) => res.json())
      .then((c) => setData(c));
  }, [user]);

  //   console.log(data);
  //   console.log(user.email);

  if (data.college_image == null) {
    return (
      <div className="pt-28 text-3xl text-red font-semibold text-center ">
        You have not get admit yet!
      </div>
    );
  }

  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
    setValue(value);
  };

  const handleReview = (e) => {
    const review = reviewText;
    const newReview = {
      name: user.displayName,
      userImg: user.photoURL,
      college_name: data?.college_name,
      ratings: data?.rating,
      review: review,
    };
    // console.log(newReview)

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((message) => {
        //   console.log(message);
        if (message.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review has given",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="pt-20">
      {loading && (
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
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mx-auto max-w-7xl">
        <div>
          <img
            src={data?.college_image}
            className="w-[620px] h-[450px]"
            alt=""
          />
        </div>

        <div className="p-3 text-my-p text-justify">
          <h3 className="text-3xl font-semibold my-5 text-center">
            <span className="text-my-primary">{data?.college_name}</span>
          </h3>

          <div className="divider"></div>
          {/* <h3 className="text-3xl mb-4 font-semibold text-my-text">
          {college_name}
        </h3> */}
          <div className="flex justify-between">
            <p className="text-[#28cd28] font-semibold">
              <span className="font-semibold text-my-text">
                Admission Open:{" "}
              </span>
              {data?.admission_dates}
            </p>
            <Link
              onClick={() => window.my_modal_3.showModal()}
              className="uppercase apply-btn text-my-text"
            >
              Give Review
            </Link>
          </div>

          <p className="my-3">
            <span className="font-semibold text-my-text">Events: </span>
            {data?.events}
          </p>
          <p>
            <span className="font-semibold text-my-text">Research: </span>
            {data?.research_history}
          </p>

          <p className="my-3">
            <span className="font-semibold text-my-text">Sports: </span>
            {data?.sports}
          </p>
          <p className="my-3">
            <span className="font-semibold text-my-text">
              Sports Facilities:{" "}
            </span>
            <span>{data?.sports_details}</span>
          </p>

          <p>
            <span className="font-semibold text-my-text">
              Admission Process:{" "}
            </span>
            {data?.admission_process}
          </p>

          <div className="lg:flex justify-between items-center">
            <p>
              <span className="font-semibold text-my-text">
                Research Pager:{" "}
              </span>
              {data?.total_research}
            </p>
            <p className="flex items-center gap-2">
              <ReactStarsRating
                className="flex my-5"
                isEdit={false}
                value={data?.rating}
              />
              <span>{data?.rating}</span>
            </p>
          </div>
        </div>
      </div>

      {/*********review modal*******************/}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle cross-btn absolute btn-error hover:bg-my-bg2 border-none right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg text-center text-my-primary">
            Give Review
          </h3>
          <div className="divider"></div>
          <div className="flex gap-3 justify-center items-center mb-2">
            <ReactStarsRating
              onChange={onChange}
              value={value}
              className="flex"
            />
            <span>{value} out of 5</span>
          </div>
          <div>
            <textarea
              onChange={(e) => setReviewText(e.target.value)}
              name="reviewMessage"
              placeholder="Write your review...."
              id=""
              cols=""
              rows="5"
            ></textarea>
          </div>
          <div className="review-btn-div">
            <input
              onClick={handleReview}
              className="review-btn"
              type="submit"
              value="Give Review"
            />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyCollage;
