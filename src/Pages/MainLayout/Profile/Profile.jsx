/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthPages/AuthProvider";
import { RotatingTriangles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/myProfile?email=${user?.email}`)
      .then((res) => res.json())
      .then((c) => setData(c));
  }, [user]);

  console.log(data);

  const {
    firstName,
    LastName,
    PhoneNumber,
    college_name,
    address,
    applicationTime,
    birth,
    collegeId,
    email,
    photo,
    subject,
  } = data;

  if (loading) {
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
  //   const { firstName, LastName, PhoneNumber, college_name, address, applicationTime, birth, collegeId, email, photo, subject} = data;

  return (
    <div className="pt-14 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 px-20 items-center mx-auto max-w-7xl">
        <div>
          <img src={photo} className="w-[620px] h-[450px]" alt="" />
        </div>

        <div className="p-3 text-my-p text-justify bg-my-bg2 h-[450px] px-20 text-lg">
          <h3 className="text-3xl font-semibold my-5 text-center">
            Information of{" "}
            <span className="text-my-primary">
              {firstName + " " + LastName}
            </span>
          </h3>

          <div className="divider"></div>

          <p className="my-2 text-xl">
            <span className="font-semibold text-my-text">Institute Name: </span>
            {college_name}
          </p>
          <p className="text-my-primary font-semibold">
            <span className="font-semibold text-my-text">Name: </span>
            {firstName + " " + LastName}
          </p>
          <p className="text-my-primary font-semibold my-2">
            <span className="font-semibold text-my-text">Email: </span>
            {email}
          </p>

          
          <p>
            <span className="font-semibold text-my-text">Phone Number: </span>
            {PhoneNumber}
          </p>

          <p className="my-3">
            <span className="font-semibold text-my-text">Birth Date: </span>
            {birth}
          </p>
          <p className="my-3">
            <span className="font-semibold text-my-text">Address: </span>
            <span>{address}</span>
          </p>

          <p>
            <span className="font-semibold text-my-text">Subject: </span>
            {subject}
          </p>


            <p className="my-2">
              <span className="font-semibold text-my-text">
                Admission Date:{" "}
              </span>
              {applicationTime?.slice(0, 10)}
            </p>


        </div>
      </div>
    </div>
  );
};

export default Profile;
