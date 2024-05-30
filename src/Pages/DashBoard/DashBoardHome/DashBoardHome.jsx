import { useContext } from "react";
import TeacherHome from "../TeacherHome/TeacherHome";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import StudentHome from "../StudentHome/StudentHome";

const DashBoardHome = () => {
    const {user}=useContext(AuthContext)
    const {isAdmin}=useAdmin()
    return (
        <div>
            { user && isAdmin&&
                <TeacherHome></TeacherHome>
                }        
                
        </div>
    );
};

export default DashBoardHome;