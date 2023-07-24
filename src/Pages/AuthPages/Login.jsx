/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [seePass, setSeePass] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from || location.state?.pathname || "/";
  // console.log(location.state)

  //   const [disable, setDisable] = useState(true);
  const { user, Login, LoginWithGoogle, LoginWithGithub, handleForgetPassword } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    Login(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorM("");

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from);
      })
      .catch((err) => {
        setErrorM(err.message);
        console.log(err);
      });
  };

  const handleGoogle = () => {
    LoginWithGoogle()
      .then((result) => {
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        setErrorM(err.message);
      });
  };

  const handleGithub = () => {
    LoginWithGithub()
      .then((result) => {
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        setErrorM(err.message);
      });
  };

  const handlePassword = async()=>{
    
    const { value: email } = await Swal.fire({
      title: 'Inter your email address',
      input: 'email',
      // inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      // Swal.fire(`Entered email: ${email}`)

      handleForgetPassword(email)
      .then(()=>{
        
        Swal.fire({
          title: 'Password reset email sent!',
          text: `To this email: ${email}`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      })
      .catch(error => {
        Swal.fire(`Error Message: ${error.message}`);
      })
    }
  }

  return (
    <>
    
      <div className="flex flex-col lg:flex-row justify-center items-center">
      <Link to="/" className="pt-10 lg:pt-0 text-3xl font-bold text-center title-text">Educate YourSelf</Link>
        <div className="p-5 rounded-lg">
          <div className="hero p-5 md:px-10 md:py-5 shadow-lg rounded-lg shadow-slate-950/50 bg-my-bg1">
            <form
              onSubmit={handleLogin}
              className="hero-content flex-col rounded-l"
            >
              <div className="text-center lg:text-left"></div>
              <div className="card flex-shrink-0 w-full max-w-md">
              <Link to="/" className="text-3xl font-bold text-center title-text">Please Login</Link>
            <div className="divider"></div>

                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={`${seePass ? "password" : "text"}`}
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  {seePass && (
                    <span
                      className="my-1 text-xs mx-2"
                      onClick={() => setSeePass(!seePass)}
                    >
                      See password
                    </span>
                  )}
                  {!seePass && (
                    <span
                      className="my-1 text-xs mx-2"
                      onClick={() => setSeePass(!seePass)}
                    >
                      Hide password
                    </span>
                  )}
                  {errorM && <p className="text-my-primary">{errorM}</p>}

                  <div className="form-control mt-6">
                    <button
                      // disabled={disable}
                      className="btn bg-my-primary hover:bg-my-secondary border-none"
                    >
                      Login
                    </button>
                  </div>
                  <p onClick={handlePassword} className="text-my-secondary cursor-pointer hover:underline">Forgot Password</p>
                  <p className="text-my-secondary text-center my-2">
                    Don't have an account?
                    <Link to="/register" className="ml-1 hover:link">
                      Register
                    </Link>
                  </p>
                  <div className="divider uppercase">Or Sing in with</div>
                  <div className="flex justify-center gap-5">
                    <Link
                      onClick={handleGoogle}
                      className="btn btn-circle btn-outline text-center text-my-secondary hover:text-white hover:bg-my-primary hover:border-my-primary"
                    >
                      <FaGoogle className="text-2xl"></FaGoogle>{" "}
                    </Link>
                    <Link
                      onClick={handleGithub}
                      className="btn btn-circle btn-outline text-center text-my-secondary hover:text-white hover:bg-my-primary hover:border-my-primary"
                    >
                      <FaGithub className="text-2xl"></FaGithub>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
