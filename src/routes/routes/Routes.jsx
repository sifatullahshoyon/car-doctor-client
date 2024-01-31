import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Bookings from "../../pages/Bookings/Bookings";
import PrivetRoutes from "../PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signUp',
            element: <SignUp />
        },
        {
            path: '/checkout/:id',
            element: <PrivetRoutes><CheckOut /></PrivetRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivetRoutes><Bookings /></PrivetRoutes>
        },
      ],
    },
  ]);


export default router;