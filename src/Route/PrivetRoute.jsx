import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;