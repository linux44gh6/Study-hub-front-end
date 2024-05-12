
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
              path:'/update',
              element:<Update></Update>
            }
        ]
    }
  ])
  export default router