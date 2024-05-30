
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
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import AdminRoute from "./AdminRoute";
import StudentHome from "../Pages/DashBoard/StudentHome/StudentHome";
import AcademicResult from "../Pages/DashBoard/AcademicResult/AcademicResult";
import PersonalNote from "../Pages/DashBoard/PersonelNote/PersonalNote";
import Achivement from "../Pages/DashBoard/Achivement/Achivement";

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
           
            
        ]
    },
    {
      path:'/dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'/dashboard',
          element:<DashBoardHome></DashBoardHome>
        },
        {
          path:'/dashboard/pending',
          element:<AdminRoute><PendingAssignment></PendingAssignment></AdminRoute>
        },
        {
          path:'/dashboard/student',
          element:<AdminRoute><Student></Student></AdminRoute>
        },
        {
          path:'/dashboard/teacherHome',
          element:<AdminRoute><TeacherHome></TeacherHome></AdminRoute>
        },
        
          {
            path:'/dashboard/mark/:id',
            element:<GiveMark></GiveMark>,
            loader:({params})=>fetch(`${import.meta.env.VITE_URL}/mark/${params.id}`)
          },
          {
            path:'/dashboard/mySubmitted',
            element:<Mysubmitted></Mysubmitted>
          },
          {
            path:'/dashboard/studentHome',
            element:<StudentHome></StudentHome>
          },
          {
            path:'/dashboard/academicResult',
            element:<AcademicResult></AcademicResult>
          },
          {
            path:'/dashboard/personalNote',
            element:<PersonalNote></PersonalNote>
          },
          {
            path:'/dashboard/achievement',
            element:<Achivement></Achivement>
          }

      ]
    }
  ])
  export default router