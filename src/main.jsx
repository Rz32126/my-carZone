import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AvailableCar from './components/AvailableCar.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import MyCar from './components/MyCar.jsx';
import AddCar from './components/AddCar.jsx';
import MyBooking from './components/MyBooking.jsx';
import CarDetails from './components/CarDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/available-car',
        element: <AvailableCar></AvailableCar>
      },
      {
        path: '/my-car',
        element: <MyCar></MyCar>
      },
      {
        path: '/add-car',
        element: <AddCar></AddCar>
      },
      {
        path: '/my-booking',
        element: <MyBooking></MyBooking>
      },
      {
        path: '/car-details',
        element: <CarDetails></CarDetails>
      },

    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
