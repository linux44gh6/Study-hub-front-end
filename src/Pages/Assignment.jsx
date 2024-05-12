import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleAssignment from "../Components/SingleAssignment";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
const Assignment = () => {
    const {user}=useContext(AuthContext)
    const [assignment,setAssignment]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=axios(`${import.meta.env.VITE_URL}/allAssignment`)
                setAssignment((await data).data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
    },[])
    const handleToDelete=async(id,email)=>{
        if(user?.email===email){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`${import.meta.env.VITE_URL}/allAssignment/${id}`)
                    const remaining=assignment.filter(as=>as._id!==id)
                    setAssignment(remaining)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });

             
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not Able to delete this item",
              });
        }
        
    }
    console.log(assignment);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                assignment.map(assn=><SingleAssignment
                key={assn._id}
                    assignment={assn}
                    handleToDelete={handleToDelete}
                ></SingleAssignment>)
            }
        </div>
    );
};

export default Assignment;