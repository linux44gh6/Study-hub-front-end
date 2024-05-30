import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const TeacherHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="bg-[#d6eaf8]">
            <h1 className="text text-3xl font-semibold">WellCome, {user?.displayName}</h1>

            <div className=" w-1/2   flex  justify-center mt-32">
                <div>
                    <img className='w-60 rounded-full' src={user?.photoURL} alt="" />
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                    <h1 className="text-3xl">{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default TeacherHome;