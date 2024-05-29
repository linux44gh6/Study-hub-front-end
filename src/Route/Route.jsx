
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
import PendingAssignment from "../Pages/PendingAssignment";
import GiveMark from "../Components/GiveMark";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Student from "../Pages/DashBoard/Student/Student";
import TeacherHome from "../Pages/DashBoard/TeacherHome/TeacherHome";

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
              element:<PrivetRoute><CreateAssaignment></CreateAssaignment></PrivetRoute>
            },
            {
              path:'/allAssignments',
              element:<Assignment></Assignment>
            },
            {
              path:'/update/:id',
              element:<PrivetRoute><Update></Update></PrivetRoute>,
              loader:({params})=>fetch(`${import.meta.env.VITE_URL}/Assignment/${params.id}`)
            },
            {
              path:'/details/:id',
              element:<PrivetRoute><AssignmentDetails></AssignmentDetails></PrivetRoute>,
              loader:({params})=>fetch(`${import.meta.env.VITE_URL}/Assignment/${params.id}`)
            },
            {
              path:'/mySubmitted',
              element:<PrivetRoute><Mysubmitted></Mysubmitted></PrivetRoute>
            },
            
            {
              path:'/mark/:id',
              element:<PrivetRoute><GiveMark></GiveMark></PrivetRoute>,
              loader:({params})=>fetch(`${import.meta.env.VITE_URL}/mark/${params.id}`)
            }
        ]
    },
    {
      path:'/dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'/dashboard/pending',
          element:<PendingAssignment></PendingAssignment>
        },
        {
          path:'/dashboard/student',
          element:<Student></Student>
        },
        {
          path:'/dashboard/teacherHome',
          element:<TeacherHome></TeacherHome>
        }
      ]
    }
  ])
  export default router