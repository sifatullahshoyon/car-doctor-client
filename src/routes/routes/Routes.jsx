import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";

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
      ],
    },
  ]);


export default router;