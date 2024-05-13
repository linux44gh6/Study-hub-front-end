import { useState } from "react";

const AssignMentRow = ({assn}) => {
    const {assign_title,status,mark,obtain_mark,feedBack}=assn
    const [pending,setPending]=useState(true)
    return (
        <tr>
        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
        {assign_title}
        </td>


        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
          {mark}
        </td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>
          <div className='flex items-center gap-x-2'>
            <p
              className='px-3 py-1 rounded-full bg-blue-100/60
              text-gray-500'
            >
             {/* here will be show the obtain_mark */}
             {obtain_mark}
            </p>
          </div>
        </td>
        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
          <div className={status==="Pending"?'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/90 text-red-500':"text-green-700"}>
            {/* <span className='h-1.5 w-1.5 rounded-full bg-red-500'></span> */}
            <h2 className='text-sm font-normal '>{status}</h2>
          </div>
        </td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>
          <p
            title='Mark Complete'
            className='text-gray-500 transition-colors duration-200  focus:outline-none disabled:cursor-not-allowed'
          >
           {/* here will show the feedBack */}
           {feedBack}
          </p>
        </td>
      </tr>
    );
};

export default AssignMentRow;