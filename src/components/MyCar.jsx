import { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import {toast, Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";



const MyCar = () => {
    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetchAllCars()
    }, [user])
    const fetchAllCars = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cars/${user?.email}`)
        setCars(data)
    }
    const handleDelete = async id => {
        try{
          const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/car/${id}`)
          fetchAllCars()
          toast.success('Car Deleted Successfully!!!')
        } catch (err){
          toast.error(err.message)
        }
    }

    const toastDelete = (id) => {
      toast(
        (t) => (
          <div className='flex gap-3 items-center'>
            <div><p>
              Are you <b>Sure?</b>
                </p>
            </div>
            <div>
              <button className='bg-red-600 text-white px-3 py-1 rounded-md'
               onClick={() => {
              handleDelete(id)
              toast.dismiss(t.id)}}>Yes</button>
              <button className='bg-green-600 ml-3 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
            </div>
            
          </div>
        ),
      );
    }

    return (
        <div>
            <div className="overflow-x-auto mt-5 w-11/12 mx-auto bg-lime-200 mb-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
        <th>Car-Image</th>
        <th>Car-Model</th>
        <th>Daily-Rent</th>
        <th>Availability</th>
        <th>Date-Added</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        cars.map(car => <tr key={car._id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={car.photo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {car.model}
            </td>
            <td>$ {car.price}</td>
            <td>{car.available}</td>
            <td>{format(new Date(car.date), 'P')}</td>
            <th>
            <Link to={`/update/${car._id}`}><button className="btn text-orange-400 text-xl mr-2"><FaRegEdit /></button></Link>
              <button onClick={() => toastDelete(car._id)} className="btn text-red-500 text-xl"><RiDeleteBin6Line /></button>
            </th>
          </tr>)
     }
    </tbody>
  </table>
</div>
  <Toaster></Toaster>
        </div>
    );
};

export default MyCar;