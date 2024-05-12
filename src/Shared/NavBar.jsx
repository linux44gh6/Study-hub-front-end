import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/hub-logo.png'
import { NavLink } from "react-router-dom";
const NavBar = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log();
    const link=<>
       <li><NavLink to='/allAssignments' className={({isActive})=>isActive?"":" font-semibold b"}>Assignments</NavLink></li>
       <li><NavLink to='/createAssaignment' className={({isActive})=>isActive?"":" font-semibold "}>Create Assignments</NavLink></li>
       <li><NavLink className={({isActive})=>isActive?"":" font-semibold"}>Pending Assignments</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 h-20 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {link}
            </ul>
          </div>
          <a className="text-xl"><img className="w-24" src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-10 menu-horizontal px-1">
          {link}
          </ul>
        </div>
        <div className="navbar-end">
        <div className='flex-none'>
            {
                user?<> <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full' title=''>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <div> my attempted assignments</div>
                  </li>
                  <li className='mt-2'>
                    <button onClick={()=>logOut()} className='bg-gray-200 block text-center'>Logout</button>
                  </li>
                </ul>
              </div></>:<> <ul className='gap-5 menu-horizontal px-1'>
          
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Registration</NavLink>
          </li>
        </ul></>
            }
       

       
      </div>
        </div>
      </div>
    );
}

export default NavBar;
