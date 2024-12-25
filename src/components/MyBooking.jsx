import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { format } from "date-fns";
// import { useParams } from "react-router-dom";


const MyBooking = () => {
    // const {id} = useParams()
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetchAllCars()
    }, [])
    const fetchAllCars = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`)
        setCars(data)
    }
    console.log(cars)
    return (
        <div>
            <div>
              <h1 className="text-2xl text-center font-bold mt-5 mb-5">My Booking Details</h1> 
            <div className="overflow-x-auto mt-5 w-11/12 mx-auto bg-blue-300 mb-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
        <th>Car Image</th>
        <th>Car Model</th>
        <th>Booking Date</th>
        <th>Price</th>
        <th>Booking Status</th>
        <th>Booking Count</th>
        <th>Actions</th>
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
            <td>{format(new Date(car.date), 'P')}</td>
            <td>$ {car.price}</td>
            <td>{car.available}</td>
            <td>{car.count}</td>
            <th>
            <Link to="/"><button className="btn text-orange-400 text-xl mr-2"><FaRegEdit /></button></Link>
              <button className="btn text-red-500 text-xl"><RiDeleteBin6Line /></button>
            </th>
          </tr>)
     }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MyBooking;