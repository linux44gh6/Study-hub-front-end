import { NavLink, Outlet } from "react-router-dom";
import PendingAssignment from "../PendingAssignment";
import Student from "./Student/Student";

const Dashboard = () => {
    return (
        <div className="px-1 md:px-2 lg:px-2 flex">
                <div className="bg-blue-600 w-[20%] h-[100vh]">
                    <h1 className="text-center text-3xl font-bold text-white">Study Hub</h1>
                    <div className="px-1 mt-5">
                   <ul className="flex flex-col">
                   <NavLink to='/dashboard/teacherHome' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded" : " font-semibold text-lg "}>Teacher Home</NavLink>
                    <NavLink to='/dashboard/pending' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded" : " font-semibold text-lg"}>Pending Assignments</NavLink>

                    <NavLink to='/dashboard/student' className={({ isActive }) => isActive ? " text-white font-semibold text-lg   py-1 rounded" : " font-semibold text-lg "}>Student</NavLink>
                   </ul>
                   <div className="divider"></div>
                   <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
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