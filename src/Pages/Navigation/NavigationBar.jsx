/* eslint-disable react/prop-types */
// import { } from "react-icons/fa";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import {} from "react-icons/fa";
import "./NavigaionBar.css";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPages/AuthProvider";
// import { NavLink } from "react-router-dom";


const NavigationBar = () => {
  const {user} = useContext(AuthContext);
  const [liHide, setLiHide] = useState(true);

  const visibleNav = () => {
    setLiHide(!liHide);
  };


  // console.log(path)

  return (
    <>
      {/* <div className="w-[100vw] text-white1 fixed bg-[#323846] bg-opacity-50 bg-[#00effe]"> */}
      <div className="w-[100vw] text-my-text z-10 fixed bg-my-bg2">
        <nav className="flex justify-between items-center hover:cursor-pointer max-w-7xl mx-auto px-3 py-2">
          <Link
            to="/"
            className="text-2xl lg:ml-0 ml-2 lg:text-3xl font-semibold title-text"
          >
            EDUCATE YOURSELF
          </Link>

          <div className="hidden lg:block">
            <ul className="flex gap-10 text-xl font-semibold">
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="">
                <NavLink to="/colleges">Colleges</NavLink>
              </li>
              <li className="">
                <NavLink to="/my-college">My College</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <h3>{user?.displayName}</h3>
            <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full"/>
            <NavLink to="/login">Login</NavLink>
          </div>

          {/* nav bar for phone  */}
          <div className="relative lg:hidden">
            <div>
              {liHide == true ? (
                <FiMenu
                  onClick={visibleNav}
                  className="lg:hidden absolute right-2 text-2xl -bottom-4"
                ></FiMenu>
              ) : (
                <RxCross1
                  onClick={visibleNav}
                  className="lg:hidden absolute right-2 text-2xl -bottom-4"
                ></RxCross1>
              )}
            </div>
            <ul
              className="py-5 hidden-ul bg-opacity-70 bg-my-bg2 lg:hidden"
              hidden={liHide}
              onClick={() => setLiHide(true)}
            >
              <li className="lg:hidden list-none">
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="lg:hidden list-none">
                <NavLink to="/colleges">
                Colleges
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="lg:hidden list-none">
                <NavLink to="/my-college">My College</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
