import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Student = () => {
    const {data:user=[]}=useQuery({queryKey:['user'],
    queryFn:async()=>{
            const res=await axios.get(`${import.meta.env.VITE_URL}/user`)
            return res.data
    }})
    console.log(user);
    const handleToMakeAdmin= async user=>{
            const data=await axios.patch(`${import.meta.env.VITE_URL}/user/admin/${user._id}`)
            .then((res)=>{
                console.log(res);
                if(res.data.modifiedCount>0){
                    Swal.fire({
                        title:`${user.name} update as admin`,
                        icon: "success"
                      });
                }
                refetch()
            })
    }
    return (
        <div className="px-10 rounded-md mt">
            <h1 className="text-3xl font-semibold">Total User:{user.length}</h1>
             <table className="table">
   
   <thead className="bg-blue-400 text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Email</th>
       <th>Roll</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
       {
           user.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                   <h1>{item.name}</h1>
                   
                 </div>
               </td>
               <td>
                {item.email}
               </td>
               <td>
                {
                    item.role==='admin'?"admin":  <FaUser onClick={()=>handleToMakeAdmin(item)} className="bg-blue-400 text-white p-2 text-4xl btn"></FaUser>
                }
                
                </td>
               <th>
                 <button onClick={()=>handleToDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt></FaTrashAlt></button>
               </th>
             </tr>)
       }
     
     
   
   </tbody>
 
   
 </table>
        </div>
    );
};

export default Student;