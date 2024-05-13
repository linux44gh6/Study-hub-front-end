
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateAssaignment from "../Pages/CreateAssaignment";
import Assignment from "../Pages/Assignment";
import Update from "../Pages/Update";
import AssignmentDetails from "../Pages/AssignmentDetails";
import Mysubmitted from "../Pages/Mysubmitted";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
            {
              path:'/createAssaignment',
              element:<CreateAssaignment></CreateAssaignment>
            },
            {
              path:'/allAssignments',
              element:<Assignment></Assignment>
            },
            {
              path:'/update/:id',
              element:<Update></Update>,
              loader:({params})=>fetch(`${import.meta.env.VITE_URL}/Assignment/${params.id}`)
            },
            {
              path:'/details/:id',
              element:<AssignmentDetails></AssignmentDetails>,
              loader:({params})=>fetch(`${import.meta.env.VITE_URL}/Assignment/${params.id}`)
            },
            {
              path:'/mySubmitted',
              element:<Mysubmitted></Mysubmitted>
            }
        ]
    }
  ])
  export default router