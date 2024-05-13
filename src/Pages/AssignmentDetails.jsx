import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from 'sweetalert2'
const AssignmentDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthContext)
    const data=useLoaderData()
    const handleToCreate=async(e)=>{
        e.preventDefault()
        const form=e.target
        const assign_title=form.ass_title.value
        const email=form.email.value
        const due_date=startDate
        const category=form.category.value
        const mark=form.mark.value
        const thumbnail_url=form.url.value
        const submitted_note=form.note.value
        const pdf_link=form.pdf.value
        const status=form.status.value
        const submitted_assignment={assign_title,email,due_date,category,mark,submitted_note,thumbnail_url,pdf_link,status}
        console.log(submitted_assignment);

        try{
            const data= await axios.post(`${import.meta.env.VITE_URL}/submits`,submitted_assignment)
            
            .then((res)=>{
                console.log(res.data);
                Swal.fire({
                   
                    position: "top-center",
                    icon: "success",
                    title: "Assignment Submit Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err)=>{
                console.log(err);
            })
            
        }
        catch(err){
            console.log(err);
        }
    }
    const{thumbnail_url,assign_title,category,description,due_date,mark}=data
        return (
        <div>
           <header class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl font-lato">{assign_title}</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300 font-semibold">{description}</p>
                <hr className=""></hr>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                <h1 className=" text-xl flex gap-2 font-semibold">Default-Level:<span className=" text-blue-600">{category}</span></h1>
                <h1 className=" text-xl flex gap-2 font-semibold">Due-Date:<span className=" text-blue-600">{(due_date).toString().slice(0,10)}</span></h1>
                <h1 className=" text-xl flex gap-2 font-semibold">Mark:<span className=" text-blue-600">{mark}</span></h1>
                </div>
            </div>
            <div className=" flex justify-end translate-y-20 -translate-x-14">
            <button className="border border-[] btn  bg-blue-600 text-white text-lg hover:text-black hover:border hover:border-blue-600" onClick={()=>document.getElementById('my_modal_1').showModal()}>Take Assignment</button>

            <dialog id="my_modal_1" className="modal w-full -z-10">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-[#ffffff4b] rounded-md shadow-md '>
        <h2 className='text-3xl text-center mb-5 font-semibold text-gray-700  font-lato  '>
          Submit Assignment
        </h2>

        <form onSubmit={handleToCreate} method="dialog">
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 font-bold' htmlFor='job_title'>
                Assignment Title
              </label>
              <input
                id='title'
                name='ass_title'
                type='text'
                disabled
                defaultValue={assign_title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
             required />
            </div>

            <div>
              <label className='text-gray-700 font-bold ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
             required />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 font-bold'> Due Date</label>

              {/* Date Picker Input Field */}
              <DatePicker className="pe-40 rounded-lg ps-2 py-2" selected={startDate} onChange={(date) => setStartDate(date)} disabled />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 font-bold' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                disabled
                defaultValue={category}
                className='border p-2 rounded-md'
              >
                <option value='Easy'>Easy</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 font-bold ' htmlFor='mark'>
                Assignment Mark
              </label>
              <input
                id='Mark'
                name=
                'mark'
                type='number'
                disabled
                defaultValue={mark}
                className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required    />
            </div>
            <div>
              <label className='text-gray-700 font-bold ' htmlFor='mark'>
                Thumbnail Image URL
              </label>
              <input
                id='Mark'
                name=
                'url'
                type='url'
                disabled
                defaultValue={thumbnail_url}
                className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required    />
            </div>
            <div>
              <label className='text-gray-700 font-bold ' htmlFor='mark'>
                Pdf/Doc Link
              </label>
              <input
                id='Mark'
                name='pdf'
                type='url'
                className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required    />
            </div>
            <div>
              <label className='text-gray-700 font-bold ' htmlFor='mark'>
               Status
              </label>
              <input
                id='Mark'
                name='status'
                type='text'
                defaultValue={'Pending'}
                disabled
                className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required    />
            </div>

           
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 font-bold ' htmlFor='description'>
              Submitted Note
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='note'
              id='note'
              required
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300  bg-blue-700 rounded-md  hover:ring-blue-300 hover:ring  hover:bg-blue-600 focus:outline-none focus:bg-gray-600'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-blue-600 text-2xl">✕</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src={thumbnail_url} alt="glasses photo"/>
        </div>
    </div>
</header>
        </div>
    );
};

export default AssignmentDetails;