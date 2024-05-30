import { NavLink, Outlet } from "react-router-dom";
import PendingAssignment from "../PendingAssignment";
import Student from "./Student/Student";
import TeacherHome from "./TeacherHome/TeacherHome";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { HiAcademicCap } from "react-icons/hi2";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin()
    return (
        <div className="px-1 md:px-2 lg:px-2 flex">
                <div className="bg-blue-400 w-[20%] h-[100vh]">
                    <h1 className="text-center text-3xl font-bold text-white">Study Hub</h1>
                    <div className="px-1 mt-5">
                 { user&&isAdmin&&
                   <ul className="flex flex-col space-y-2">
                   <li className="flex items-center gap-1"> <NavLink to='/dashboard/TeacherHome' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : "font-semibold text-black text-lg flex items-center gap-1 "}><FaHome className="text-2xl"></FaHome>Teacher Home</NavLink></li>
                   <li className="flex items-center gap-1"> <NavLink to='/dashboard/pending' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1"}> <MdPendingActions className="text-2xl"></MdPendingActions>Pending Assignments</NavLink></li>
                   <li className="flex items-center gap-1"> <NavLink to='/dashboard/student' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1 "}><FaUsers className="text-2xl"></FaUsers>Users</NavLink></li>
                    </ul>
                    
                 }
                 {
                    user&&!isAdmin&&
                    <ul className="flex flex-col space-y-2">
                    <li className="flex items-center gap-1"> <NavLink to='/dashboard/studentHome' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : "font-semibold text-black text-lg flex items-center gap-1 "}><FaHome className="text-2xl"></FaHome>Student Profile</NavLink></li>
                    <li className="flex items-center gap-1"> <NavLink to='/dashboard/mySubmitted' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1"}> <MdPendingActions className="text-2xl"></MdPendingActions>My Submission</NavLink></li>
                    <li className="flex items-center gap-1"> <NavLink to='/dashboard/academicResult' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1"}> <HiAcademicCap className="text-2xl"></HiAcademicCap>Academic Result</NavLink></li>
                    <li className="flex items-center gap-1"> <NavLink to='/dashboard/achievement' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1"}> <FaSquareWebAwesomeStroke className="text-2xl"></FaSquareWebAwesomeStroke>Achievements</NavLink></li>
                    <li className="flex items-center gap-1"> <NavLink to='/dashboard/personalNote' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : " font-semibold text-lg flex items-center gap-1"}> <FaNotesMedical className="text-2xl"></FaNotesMedical>Personal Note</NavLink></li>
                     </ul>
                 }
                   <div className="divider"></div>
                   <ul>
                   <li className="flex items-center gap-1"> <NavLink to='/' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded flex items-center gap-1" : "font-semibold text-black text-lg flex items-center gap-1 "}><FaHome className="text-2xl"></FaHome>Home</NavLink></li>
                   </ul>
                    </div>    
            </div>
           
            <div className="bg-[#d6eaf8] flex-1">
            <Outlet></Outlet>
                </div>
           
        </div>
    );
};

export default Dashboard;