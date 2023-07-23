/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children, useContext } from "react";
import { AuthContext } from "../Pages/AuthPages/AuthProvider";
import { RotatingTriangles } from "react-loader-spinner";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

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

    if(user){
        return children;
    }

    Swal.fire({
        icon: 'error',
        title: 'Your are not logged in yet!',
        text: 'To visit this page Please Register or Login',
        // footer: '<a href="">Why do I have this issue?</a>'
      })

    return <Navigate to="/login" state={{ from: location.pathname }} replace></Navigate>;
    
    
};

export default PrivateRoute;