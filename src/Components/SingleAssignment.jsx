import { NavLink } from "react-router-dom";

const SingleAssignment = ({assignment,handleToDelete}) => {
    const{assign_title,thumbnail_url,category,mark,_id,email}=assignment
    return (
        
        <div className="her bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={thumbnail_url}className="w-80 rounded-lg shadow-2xl" />
    <div className=" space-y-5">
      <h1 className="text-2xl font-bold font-lato">{assign_title}</h1>
      <p className=" text-blue-600 font-semibold">{category}</p>
      <p className=" text-gray-600 font-bold">Marks-<span className=" font-bold">{mark}</span></p>
      <div className="flex gap-3">
  <button className="btn join-item border border-[#FFA500]">View</button>
  <NavLink to={`/update/${_id}`}>
  <button className="btn join-item border border-green-500 ">Update</button>
  </NavLink>
  <button onClick={()=>handleToDelete(_id,email)} className="btn join-item border border-red-500">Delete</button>
</div>
    </div>
   
  </div>
</div>
       
    );
};

export default SingleAssignment;