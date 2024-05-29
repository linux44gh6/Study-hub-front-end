import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const TeacherHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="bg-[#d6eaf8]">
            <h1 className="text text-3xl font-semibold">WellCome, {user?.displayName}</h1>
        </div>
    );
};

export default TeacherHome;