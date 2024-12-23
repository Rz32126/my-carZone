import { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { format } from "date-fns";



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
    console.log(cars)
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
            <td>{car.price}</td>
            <td>{car.available}</td>
            <td>{format(new Date(car.date), 'P')}</td>
            <th>
              <button className="btn text-orange-400 text-xl mr-2"><FaRegEdit /></button>
              <button className="btn text-red-500 text-xl"><RiDeleteBin6Line /></button>
            </th>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCar;