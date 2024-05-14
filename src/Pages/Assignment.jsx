import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleAssignment from "../Components/SingleAssignment";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
const Assignment = () => {
    const {user}=useContext(AuthContext)
    const [filter,setFilter]=useState('')
    const [assignment,setAssignment]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=axios(`${import.meta.env.VITE_URL}/allAssignment?filter=${filter}`)
                setAssignment((await data).data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
    },[filter])
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
    // console.log(assignment);
    return (
        <div className="pt-20">
             <div className='flex flex-col gap-2 w-40 mx-auto '>
              <label className='text-gray-700 font-bold' htmlFor='category'>
                FilterBy
              </label>
              <select
              onChange={(e)=>setFilter(e.target.value)}
              value={filter}
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='Easy'>Easy</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                assignment.map(assn=><SingleAssignment
                key={assn._id}
                    assignment={assn}
                    handleToDelete={handleToDelete}
                ></SingleAssignment>)
            }
            </div>
            
        </div>
    );
};

export default Assignment;