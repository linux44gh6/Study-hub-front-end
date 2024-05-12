import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from 'sweetalert2'
const CreateAssaignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthContext)
    const handleToCreate= async e=>{
        e.preventDefault()
        const form=e.target
        const assign_title=form.ass_title.value
        const email=form.email.value
        const due_date=startDate
        const category=form.category.value
        const mark=form.mark.value
        const thumbnail_url=form.url.value
        const description=form.description.value
        const Assignment={assign_title,email,due_date,category,mark,description,thumbnail_url}
        console.log(Assignment);
        
        try{
            const data= await axios.post(`${import.meta.env.VITE_URL}/assignment`,Assignment)
            
            .then((res)=>{
                console.log(res.data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Assignment Create Successful",
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
   
    return (
     <div className=" Cbg py-10">
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-[#ffffff4b] rounded-md shadow-md '>
        <h2 className='text-3xl text-center mb-5 font-semibold text-gray-200  font-lato  '>
          Create a  Assignment
        </h2>

        <form onSubmit={handleToCreate}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 font-bold' htmlFor='job_title'>
                Assignment Title
              </label>
              <input
                id='title'
                name='ass_title'
                type='text'
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
              <DatePicker className="pe-40 rounded-lg ps-2 py-2" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 font-bold' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
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
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
    </div>
    );
};

export default CreateAssaignment;