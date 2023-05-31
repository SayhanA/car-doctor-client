import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";
import Services from "../pages/Services/Services/Services";
import About from "../pages/Home/About/About";
import AboutDetails from "../pages/AboutDetails/AboutDetails";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/aboutDetails',
                element: <AboutDetails />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/SignUp',
                element: <SignUp />
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><Checkout /></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRouter><Bookings /></PrivateRouter>,
                
            }
        ]
    }
])

export default router;