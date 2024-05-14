import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import 'animate.css';
import { useState } from "react";
const PdfViewer = ({ pdfUrl }) => {
    return (
      <div className="pdf-viewer">
        <iframe src={pdfUrl} title="PDF Viewer" width="100%" height="500px" />
      </div>
    );
  };

const GiveMark = () => {
    const navigate=useNavigate()
    const pending=useLoaderData()
    const {thumbnail_url,
        assign_title,
        submitted_note,pdf_link,
        status,
        mark,
        examine,obtain_mark,feedBack,_id}=pending
    const handleToSubmitFeedBack= async e=>{
        e.preventDefault()
        const form=e.target
        const obtain_mark=form.obtain_mark.value
        const feedBack=form.note.value
        const status='complete'
        const TFeedBack={obtain_mark,feedBack,status}
        try{
            const data= await axios.patch(`${import.meta.env.VITE_URL}/mark2/${_id}`,TFeedBack) 
            .then((res)=>{
                if(res.data.modifiedCount>0){
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "FeedBack Given Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                }
               navigate('/pending')
            })
            .catch((err)=>{
                console.log(err);
            })
           
        }
        catch(err){
            console.log(err);
        }
     console.log(TFeedBack);
    }

   const [showPdf, setShowPdf] = useState(false);

  const handleButtonClick = () => {
    setShowPdf(true);
  };
    return (
        <div className=" flex justify-center pt-20">
             <div className="modal-box w-11/12 max-w-5xl border border-blue-700 animate__animated animate__backInDown">
    <h3 className="font-bold text-2xl mb-4  text-center ">FeedBack</h3>
    <section classe="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h1 className=' font-semibold text-xl'>Submitted-Doc- <a className=' text-xl font-semibold text-blue-600' href={pdf_link}>{pdf_link}</a></h1>
    <div>
        <button onClick={handleButtonClick} className="btn border border-blue-700">Preview Doc</button>
        {
            showPdf&&<PdfViewer pdfUrl={`${pdf_link}`} />
        }
    </div>
    <p className=' font-semibold text-xl'>Submitted-Note: <span className=" text-xl text-gray-600">{submitted_note}</span></p>

    <form onSubmit={handleToSubmitFeedBack}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
            <div>
                <label className="text-gray-700 dark:text-gray-200 font-bold text-xl" for="username">Obtain_mark</label>
                <input id="username" name='obtain_mark' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 font-bold  text-xl' htmlFor='description'>
              FeedBack
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='note'
              id='note'
              required
            ></textarea>
          </div>

        </div>

        <div className='flex justify-end mt-5'>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 ">Submit</button>
       </div>
    </form>
</section>
   
  </div>
        </div>
    );
};

export default GiveMark;