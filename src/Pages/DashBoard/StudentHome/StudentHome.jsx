import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const StudentHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
             <h1 className="text text-3xl font-semibold">WellCome, {user?.displayName}</h1>

<div className=" w-1/   flex  justify-center mt-32">
    <div>
        <img className='w-60 rounded-full' src={user?.photoURL} alt="" />
    </div>
    <div className="divider divider-horizontal"></div>
    <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Name:{user?.displayName}</h1>
        <h1 className="font-semibold">Email:{user?.email}</h1>
        <h2 className="font-semibold">Contact Info:</h2>
        <h2 className="font-semibold">Registration:</h2>
        <h2 className="font-semibold">Roll:</h2>
        <h2 className="font-semibold">Enrolling Date:</h2>
    </div>
</div>
        </div>
    );
};

export default StudentHome;