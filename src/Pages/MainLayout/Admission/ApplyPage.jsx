/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./ApplyPage.css";

import admissionImg from './../../../assets/admission2.png';

const ApplyPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto pt-14">
      <SectionTitle title={"College Admission Form"}></SectionTitle>

      <div className="w-full grid grid-cols-2 items-center">
        <div>
            <img src={admissionImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="two-input-field">
          <div>
            <h4>First Name</h4>
            <input placeholder="Enter your first Name" type="text" {...register("firstName")} />
          </div>
          <div>
            <h4>Last Name</h4>
            <input placeholder="Enter your last Name" type="text" {...register("LastName")} />
          </div>
        </div>
        <div className="two-input-field">
          <div >
            <h4>Subject</h4>
            <input placeholder="Enter Subject" type="text" {...register("subject")} />
          </div>
          <div>
            <h4>Email</h4>
            <input placeholder="Enter your email" type="email" {...register("email")} />
          </div>
        </div>
        <div className="two-input-field">
          <div >
            <h4>Phone Number</h4>
            <input type="text" placeholder="Enter your phone Number" {...register("PhoneNumber")} />
          </div>
          <div>
            <h4>Address</h4>
            <input placeholder="Enter your address" type="text" {...register("address")} />
          </div>
        </div>
        <div className="two-input-field">
          <div >
            <h4>Date of birth</h4>
            <input type="date" {...register("birth")}/>
          </div>
          <div>
            <h4>Photo</h4>
            <input type="file" {...register("photo")} />
          </div>
        </div>

        <div>
            <input className="submit-btn" type="submit" value="SUBMIT" />
        </div>

      </form>
      </div>
    </div>
  );
};

export default ApplyPage;
