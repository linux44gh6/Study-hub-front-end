
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateAssaignment from "../Pages/CreateAssaignment";

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
            }
        ]
    }
  ])
  export default router