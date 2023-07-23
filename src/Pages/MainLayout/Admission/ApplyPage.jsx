/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./ApplyPage.css";

import admissionImg from "./../../../assets/admission2.png";
import Swal from "sweetalert2";

const ApplyPage = () => {
  const [userImage, setUserImage] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params);

  let date = new Date().toJSON();

  const imageHostingKey = import.meta.env.VITE_API_KEY;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.photo[0]);

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.data.display_url) {
          const temp = data;
          temp.photo = imageResponse.data.display_url;
          const candidateInfo = {
            ...data,
            collegeId: params.id,
            applicationTime: date,
          };
          // console.log(candidateInfo);
          //   console.log(imageResponse);

          fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(candidateInfo),
          })
            .then((res) => res.json())
            .then((message) => {
              //   console.log(message);
              if (message.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Admission Completed",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              }
            });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto pt-14">
      <div className="w-full grid grid-cols-2 items-center">
        <div>
          <img src={admissionImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="admission-form">
          <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">
            College Admission Form
          </h3>
          <div className="divider"></div>

          <div className="two-input-field">
            <div>
              <h4>First Name</h4>
              <input
                required
                placeholder="Enter your first Name"
                type="text"
                {...register("firstName")}
              />
            </div>
            <div>
              <h4>Last Name</h4>
              <input
                required
                placeholder="Enter your last Name"
                type="text"
                {...register("LastName")}
              />
            </div>
          </div>
          <div className="two-input-field">
            <div>
              <h4>Subject</h4>
              <input
                required
                placeholder="Enter Subject"
                type="text"
                {...register("subject")}
              />
            </div>
            <div>
              <h4>Email</h4>
              <input
                required
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="two-input-field">
            <div>
              <h4>Phone Number</h4>
              <input
                required
                type="text"
                placeholder="Enter your phone Number"
                {...register("PhoneNumber")}
              />
            </div>
            <div>
              <h4>Address</h4>
              <input
                required
                placeholder="Enter your address"
                type="text"
                {...register("address")}
              />
            </div>
          </div>
          <div className="two-input-field">
            <div>
              <h4>Date of birth</h4>
              <input required type="date" {...register("birth")} />
            </div>
            <div>
              <h4>Photo</h4>
              <input required type="file" {...register("photo")} />
            </div>
          </div>

          <div>
            <input
              required
              className="submit-btn cursor-pointer"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
