import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/ErrorPage/Error";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Collages from "../Pages/Collages/Collages";
import MyCollage from "../Pages/MyCollage/MyCollage";
import Home from "../Pages/MainLayout/Home/Home";
import CollegeDetails from "../Components/CollegeDetails/CollegeDetails";
import Admission from "../Pages/MainLayout/Admission/Admission";
import ApplyPage from "../Pages/MainLayout/Admission/ApplyPage";
import Profile from "../Pages/MainLayout/Profile/Profile";
import EditProfile from "../Pages/MainLayout/Profile/EditProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Collages></Collages>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission/:id",
        element: <PrivateRoute><ApplyPage></ApplyPage></PrivateRoute>,
      },
      {
        path: "/my-college",
        element: <PrivateRoute><MyCollage></MyCollage></PrivateRoute>,
      },
      {
        path: "/colleges/:id",
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/profile/:id",
        element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
