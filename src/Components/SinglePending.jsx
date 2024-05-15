
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';
import { useTypewriter } from 'react-simple-typewriter'
const SinglePending = ({pending, setPendings}) => {
  const [text] = useTypewriter({
    words: ['...'],
    loop: Infinity,
    typeSpeed:120
  })
  const [id,setId]=useState(null)
  console.log(pending);
    const {thumbnail_url,
        assign_title,
        submitted_note,pdf_link,
        status,
        mark,
        examine,obtain_mark,feedBack,_id}=pending

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:w-[600px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
    <div className=" ">
        <img className=" rounded" src={thumbnail_url} alt="" />
    </div>

    <div className="lg:w-[700px] p-4 md:p-4">
        <h1 className=" lg:translate-x-52 -translate-y-5 font-bold text-red-500">{status}{text}</h1>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{assign_title}</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex gap-1 font-semibold">Examine: <span classNameName=" hover:underline">{examine}</span></p>

        <div className="flex mt-2 item-center gap-6">
          <p className=" font-semibold">Assignment_Mark: <span classNameName=" text-blue-700 font-semibold "> {mark}</span></p>
        </div>

        <div className="flex justify-between mt-3 item-center gap-">
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 "></h1>
           <NavLink to={`/mark/${_id}`}>
           <button className="px-2 py-2 text-xs font-bold hover:text-white uppercase transition-colors duration-300 transform rounded dark:bg-blue-700 hover:bg-blue-900   border border-blue-600 btn dark:text-white  text-black" onClick={() => {document.getElementById('my_modal_4').showModal(); setId(`${_id}`);}}>give mark</button>
           </NavLink>
            

        </div>
    </div>
</div>
        </div>
    );
};

export default SinglePending;