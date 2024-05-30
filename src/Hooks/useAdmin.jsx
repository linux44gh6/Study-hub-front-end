import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const {data:isAdmin}=useQuery({queryKey:['admin'],queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_URL}/user/admin/${user?.email}`)
        console.log(res.data);
        return res.data?.admin
    }})
    return [isAdmin]
};

export default useAdmin;