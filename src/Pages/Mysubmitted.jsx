import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import AssignMentRow from '../Components/AssignMentRow';

const Mysubmitted = () => {
    const {user}=useContext(AuthContext)

    const [submitted,setSubmitted]=useState([])
    useEffect(()=>{
        try{
            const getData=async()=>{
                const data=await  axios(`${import.meta.env.VITE_URL}/submitted/${user?.email}`)
                setSubmitted(data.data)
            }
            getData()
        }
        catch(err){
            console.log(err);
        }
        console.log(submitted);
    },[])
    return (
        <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Submission</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {submitted.length} Assignment
          </span>
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span className=' text-blue-600 font-semibold text-lg'>Assignment_Title</span>
                        </div>
                      </th>
  
                     
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <button className='flex items-center gap-x-2'>
                          <span className=' text-blue-600 font-semibold text-lg'>Assignment_marks</span>
                        </button>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5  text-left rtl:text-right  text-blue-600 font-semibold text-lg'

                      >
                        Obtain_marks
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5  text-left rtl:text-right  text-blue-600 font-semibold text-lg'
                      >
                        Status
                      </th>
  
                      <th className='px-4 py-3.5  text-left rtl:text-right text-blue-600 font-semibold text-lg'>
                        FeedBack
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                   
                   {
                    submitted.map(assn=><AssignMentRow
                    key={assn._id}
                    assn={assn}
                    ></AssignMentRow>)
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Mysubmitted;