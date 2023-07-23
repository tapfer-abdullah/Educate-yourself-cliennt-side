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
        element: <ApplyPage></ApplyPage>,
      },
      {
        path: "/my-college",
        element: <MyCollage></MyCollage>,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
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
