
import Typewriter from 'typewriter-effect/dist/core';
const SinglePending = ({pending}) => {
    const {thumbnail_url,
        assign_title,
        submitted_note,pdf_link,
        status,
        mark,
        examine,obtain_mark,feedBack}=pending
    return (
        <div>
            <div className="flex w-[600px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className=" ">
        <img className=" rounded" src={thumbnail_url} alt="" />
    </div>

    <div className="w-[700px] p-4 md:p-4">
        <h1 className=" translate-x-52 -translate-y-5 font-bold text-red-500">{status}...</h1>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{assign_title}</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex gap-1 font-semibold">Examine: <span classNameName=" hover:underline">{examine}</span></p>

        <div className="flex mt-2 item-center gap-6">
          <p className=" font-semibold">Assignment_Mark: <span classNameName=" text-blue-700 font-semibold "> {mark}</span></p>
        </div>

        <div className="flex justify-between mt-3 item-center gap-">
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 "></h1>
            <button className="px-2 py-2 text-xs font-bold hover:text-white uppercase transition-colors duration-300 transform rounded dark:bg-gray-700 hover:bg-blue-900   border border-blue-600 btn text-black" onClick={()=>document.getElementById('my_modal_4').showModal()}>give mark</button>

            <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg  text-center">FeedBack</h3>
    <section classe="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h1 className=' font-semibold'>Submitted-Doc: <a className=' font-semibold text-blue-600' href={pdf_link}>{pdf_link}</a></h1>
    <p className=' font-semibold'>Submitted-Note: <span>{submitted_note}</span></p>

    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
            <div>
                <label className="text-gray-700 dark:text-gray-200 font-bold" for="username">Obtain_mark</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 font-bold ' htmlFor='description'>
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

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
        </div>
    </form>
</section>
    <div classNameName="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-blue-600 text-2xl">✕</button>

      </form>
    </div>
  </div>
</dialog>
        </div>
    </div>
</div>
        </div>
    );
};

export default SinglePending;