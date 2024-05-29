import axios from "axios";
import { useEffect, useState } from "react";
import SinglePending from "../Components/SinglePending";

const PendingAssignment = () => {
   
    const [pendings,setPendings]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=axios(`${import.meta.env.VITE_URL}/pending/Pending`)
                setPendings((await data).data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  pb-20 ">
            {
                pendings.map(pending=><SinglePending
                key={pending._id}
                pending={pending}
                id={pending._id}
                setPendings={setPendings}
                ></SinglePending>)
            }
        </div>
    );
};

export default PendingAssignment;