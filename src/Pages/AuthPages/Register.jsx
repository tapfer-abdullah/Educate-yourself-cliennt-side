/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { UpdateUser, Register, LoginWithGoogle, LoginWithGithub } =
    useContext(AuthContext);
  const [seePass, setSeePass] = useState(true);

  const [passwordError, setPasswordError] = useState("");
  const [emptyP, setEmptyP] = useState(true);
  const [emptyCP, setEmptyCP] = useState(true);
  const [emptyE, setEmptyE] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const { Register, UpdateUser, LoginWithGoogle } = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data);

    Register(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        UpdateUser(data.name, data.photoUrl)
          .then(() => {
            const newUser = {
              name: data.name,
              email: data.email,
              photo: data.photoUrl,
              designation: "Student",
            };

            Swal.fire({
              title: `Registration successful!`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            // console.log(result)
            navigate("/");
          })
          .catch("Unable to update profile!");
      })
      .catch((error) => {
        console.log(error);
        setPasswordError(error.message);
      });
  };

  const handleGoogle = () => {
    LoginWithGoogle()
      .then((result) => {
        Swal.fire({
          title: `Registration successful!`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        // console.log(result)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setPasswordError(err.message);
      });
  };
  const handleGithub = () => {
    LoginWithGithub()
      .then((result) => {
        Swal.fire({
          title: `Registration successful!`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        // console.log(result)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setPasswordError(err.message);
      });
  };

  const handleEmail = (event) => {
    if (event.target.value) {
      setEmptyE(false);
    } else {
      setEmptyE(true);
    }
  };
  const handlePassword = (event) => {
    if (event.target.value) {
      setEmptyP(false);
    } else {
      setEmptyP(true);
    }
  };

  useEffect(() => {
    // console.log(emptyE == true && emptyP == true && emptyCP == true);
    if (emptyE == true && emptyP == true && emptyCP == true) {
      setBtnDisable(!false);
    } else {
      setBtnDisable(!true);
    }
  }, [emptyE, emptyP, emptyCP]);

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 md:py-10">
        <div className="hero rounded-lg p-5 md:px-20 md:pt-5 md:pb-2 shadow-lg shadow-slate-950/50 bg-my-bg1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="hero-content flex-col lg:flex-row-reverse"
          >
            <div className="text-center lg:text-left"></div>
            <div className="card flex-shrink-0 w-full max-w-md">
            <Link to="/" className="text-3xl font-bold text-center title-text">Please Register</Link>
            <div className="divider"></div>
              {/* <h3 className="text-2xl text-center font-semibold mb-3">
                Please Register
              </h3> */}

              <div className="card-body">
                <div className="lg:flex gap-3 justify-center w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-red-600 my-2">
                        Name is required
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      name="photoUrl"
                      {...register("photoUrl", { required: true })}
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered"
                    />
                    {errors.photoUrl && (
                      <span className="text-red-600 my-2">
                        Photo URL is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:flex gap-3 justify-center w-full">
                  <div onBlur={handleEmail} className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600 my-2">
                        Email is required
                      </span>
                    )}
                  </div>

                  <div onBlur={handlePassword} className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 32,
                        pattern:
                          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/i,
                      })}
                      name="password"
                      type={`${seePass ? "password" : "text"}`}
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password?.type == "required" && (
                      <span className="text-red-600 my-2">
                        Password is required
                      </span>
                    )}
                    {errors.password?.type == "pattern" && (
                      <span className="text-red-600 my-2">
                        Password must contain at least six characters including
                        at least 1 upper case and 1 special character
                      </span>
                    )}
                    {(errors.password?.type == "minLength" ||
                      errors.password?.type == "maxLength") && (
                      <span className="text-red-600 my-2">
                        Password should be between 6 to 32 characters is
                        required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control mt-6 w-full">
                  <input
                    disabled={btnDisable}
                    className="btn bg-my-primary hover:bg-my-secondary border-none w-36 mx-auto"
                    type="submit"
                    value="Register"
                  />
                </div>

                <p className="text-my-secondary text-center my-2">
                  Already have an account?
                  <Link to="/login" className="ml-1 hover:link">
                    Log in
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
  );
};

export default Register;
