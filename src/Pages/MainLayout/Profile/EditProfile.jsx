/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthPages/AuthProvider";
import { RotatingTriangles } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import './Profile.css';
import updateImg from "./../../../assets/update.png";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const EditProfile = () => {
  useTitle("Edit Profile");
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [college, setCollege] = useState("");
  const [collegeID, setCollegeID] = useState("");

  useEffect(() => {
    fetch(`https://educate-yourself-server-side.vercel.app/myProfile?email=${user?.email}`)
      .then((res) => res.json())
      .then((c) => setData(c));
  }, [user]);

  //   console.log(data);

  const {
    firstName,
    LastName,
    PhoneNumber,
    college_name,
    address,
    collegeId,
    email,
    _id,
  } = data;


  const onSubmit = (e) => {
    const form = e.target;
    e.preventDefault();

    const firstName = form.firstName.value;
    const LastName = form.LastName.value;
    const PhoneNumber = form.PhoneNumber.value;
    const email = form.email.value;
    const address = form.address.value;

    const updatedData = {firstName, LastName, PhoneNumber, email, address, collegeId:collegeID || collegeId, college_name: college || college_name }
    // console.log(updatedData);


    fetch(`https://educate-yourself-server-side.vercel.app/myProfile/${_id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          })
            .then((res) => res.json())
            .then((message) => {
            //   console.log(message);
            if(message.modifiedCount >=1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update Completed',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            });

  };

  const handleChange =(event)=>{
    const selectedIndex = event.target.selectedIndex;
    const college_name = event.target.options[selectedIndex].text;
    const collegeId = event.target.value;

    setCollege(college_name);
    setCollegeID(collegeId);
    // console.log(college_name, collegeId);
  }

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

  return (
    <div className="pt-14 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img src={updateImg} alt="" />
        </div>
        <form onSubmit={onSubmit} className="admission-form">
          <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">
            Update Your Information
          </h3>
          <div className="divider"></div>

          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>First Name</h4>
              <input
                defaultValue={firstName}
                name="firstName"
                required
                placeholder="Enter your first Name"
                type="text"
                // {...register("firstName")}
              />
            </div>
            <div>
              <h4>Last Name</h4>
              <input
                defaultValue={LastName}
                required
                placeholder="Enter your last Name"
                type="text"
                // {...register("LastName")}
                name="LastName"
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>University</h4>
              <select onChange={handleChange} name="collegeId">
                <option disabled selected value={collegeId}>{college_name}</option>
                <option value="64bc4115b7a646b254c51a17">University of ABC</option>
                <option value="64bc4115b7a646b254c51a18">XYZ College</option>
                <option value="64bc4115b7a646b254c51a19">Institute of PQR</option>
                <option value="64bc4115b7a646b254c51a1a">ETH Zurich</option>
                <option value="64bc4115b7a646b254c51a1b">UVW Business College</option>
                <option value="64bc4115b7a646b254c51a1c">EFG College of Techonology</option>
              </select>

              

            </div>
            <div>
              <h4>Email</h4>
              <input
                defaultValue={email}
                required
                placeholder="Enter your email"
                type="email"
                // {...register("email")}
                name="email"
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Phone Number</h4>
              <input
                defaultValue={PhoneNumber}
                required
                type="text"
                placeholder="Enter your phone Number"
                // {...register("PhoneNumber")}
                name="PhoneNumber"
              />
            </div>
            <div>
              <h4>Address</h4>
              <input
                defaultValue={address}
                required
                placeholder="Enter your address"
                type="text"
                // {...register("address")}
                name="address"
              />
            </div>
          </div>

          <div>
            <input className="submit-btn cursor-pointer" type="submit" value="UPDATE INFO" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
