import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
const Update = () => {
  const data=useLoaderData()
  const {email,assign_title,category,mark}=data
  const [startDate, setStartDate] = useState(new Date());
  const handleToUpdate=async(e)=>{
    e.preventDefault()
  }
    return (
        <div>
            <header class="bg-white dark:bg-gray-900">

    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center gap-5">
        <div class="w-full lg:w-1/2">
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-[#ffffff4b] rounded-md shadow-md '>
        <h2 className='text-3xl text-center mb-5 font-semibold text-gray-700  font-lato  '>
          UpDate the  Assignment
        </h2>

        <form onSubmit={handleToUpdate}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 font-bold' htmlFor='job_title'>
                Assignment Title
              </label>
              <input
                id='title'
                name='ass_title'
                type='text'
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
              defaultValue={email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
             required />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 font-bold'> Due Date</label>

              {/* Date Picker Input Field */}
              <DatePicker className="pe-40 rounded-lg ps-2 py-2" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 font-bold' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
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
                className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required    />
            </div>

           
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 font-bold ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              required
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
            Update Assignment
            </button>
          </div>
        </form>
      </section>
    </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo"/>
        </div>
    </div>
</header>
        </div>
    );
};

export default Update;