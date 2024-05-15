import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/hub-logo.png'
import { NavLink } from "react-router-dom";
const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  const { user, logOut } = useContext(AuthContext)
  console.log();
  const link = <>


    <><li><NavLink to='/allAssignments' className={({ isActive }) => isActive ? " border px-2 py-1 rounded text-orange-900 font-semibold text-lg" : "  font-semibold text-lg hover:scale-105"}>Assignments</NavLink></li><li><NavLink to='/createAssaignment' className={({ isActive }) => isActive ? "text-orange-900 font-semibold text-lg  border px-2 py-1 rounded" : "  font-semibold text-lg "}>Create Assignments</NavLink></li><li><NavLink to='/pending' className={({ isActive }) => isActive ? " text-orange-900 font-semibold text-lg  border px-2 py-1 rounded" : " font-semibold text-lg hover:scale-105"}>Pending Assignments</NavLink></li></>
  </>

const lgs = localStorage.getItem('theme') || 'light'
const [theme, setTheme] = useState(lgs)

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

const toggleTheme = () => {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setTheme('light');
  }
}


  return (
    <div className={`navbar  lg:fixed z-20 h-32 md:h-20 lg:h-20 shadow transition-colors duration-500 ease-in-out ${isScrolled ? 'bg-[#3498db]' : 'bg-[#ffffff36]'}`}>
      <div className="navbar-start dark:text-white">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <NavLink to='/' className="text-xl"><img className=" w-8 lg:w-24" src={logo} alt="" /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-10 menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex'>
          {
            user ? <>
              <label className="cursor-pointer grid place-items-center">
                <input onClick={toggleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </label>
              <div className='dropdown dropdown-end z-50'>
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
                  <NavLink to='/mySubmitted' className=" capitalize font-roboto border hover:border-blue-700 btn text-lg py-2 hover:ring hover:ring-blue-300 hover:ring-opacity-25 bg-blue-600 text-white hover:text-black"> my submitted</NavLink>

                  <li className='mt-2'>
                    <button onClick={() => logOut()} className='bg-gray-200 block text-center btn'>Logout</button>
                  </li>
                </ul>
              </div></> : <div className=""> <ul className=' gap-1 lg:gap-5 menu-horizontal px-1'>
                <label className="cursor-pointer grid place-items-center">
                  <input onClick={toggleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
              <div className="flex flex-col lg:flex-row md:flex-row gap-2">
              <li>
                  <NavLink to='/login' className='btn w-full bg-transparent text-black  hover:bg-transparent hover:scale-105'>Login</NavLink>
                </li>
                <li>
                  <NavLink to='/register' className='btn  bg-transparent  hover:bg-transparent hover:scale-105'>Registration</NavLink>
                </li>
              </div>
              </ul></div>
          }



        </div>
      </div>
    </div>
  );
}

export default NavBar;
