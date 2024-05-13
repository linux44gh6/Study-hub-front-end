import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className=" flex justify-center ">
            <span className="loading loading-spinner w-20 mx-auto text-blue-600 translate-y-10"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;