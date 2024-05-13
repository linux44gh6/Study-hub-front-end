import axios from "axios";
import { useEffect, useState } from "react";

const PendingAssignment = () => {
    const [pending,setPending]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=axios(`${import.meta.env.VITE_URL}/pending/Pending`)
                setPending((await data).data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
    },[])
    console.log(pending);
    return (
        <div>
            <h1>this is the Pending</h1>
        </div>
    );
};

export default PendingAssignment;