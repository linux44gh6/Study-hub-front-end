import axios from 'axios';

import React, { useEffect, useState } from 'react';
import SingleTeacher from './SingleTeacher';

const Expart = () => {
    const [teachers,setTeachers]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=axios(`${import.meta.env.VITE_URL}/teacher`)
                setTeachers((await data).data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
    },[])
    console.log(teachers);
    return (
        <div className='mt-20'>
            <div className='lg:w-1/2 mx-auto text-center'>
                <h1 className=' font-lato text-2xl lg:text-5xl'>Meet Your Experts</h1>
                <p className=' font-semibold text-gray-500'>Explore a diverse group of highly qualified teachers from renowned institutions, dedicated to providing exceptional education and guidance in their respective fields.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-3 mt-10'>
                {
                    teachers.map(teacher=><SingleTeacher
                    teacher={teacher}
                    ></SingleTeacher>)
                }
            </div>
        </div>
    );
}

export default Expart;
