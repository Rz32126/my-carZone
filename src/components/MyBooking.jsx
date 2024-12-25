import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";  // Importing DatePicker
import "react-datepicker/dist/react-datepicker.css";  // Import styles for the date picker

const MyBooking = () => {
  const [cars, setCars] = useState([]);
  const [editingDate, setEditingDate] = useState(null); // To track the car being edited
  const [newDate, setNewDate] = useState(null); // New date selected by the user

  useEffect(() => {
    fetchAllCars();
  }, []);

  const fetchAllCars = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
    setCars(data);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/booking/${id}`);
      fetchAllCars();
      toast.success('Your Booking has been Deleted!!!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const toastDelete = (id) => {
    toast(
      (t) => (
        <div className='flex gap-3 items-center'>
          <div><p>Are you <b>Sure?</b></p></div>
          <div>
            <button className='bg-red-600 text-white px-3 py-1 rounded-md'
              onClick={() => {
                handleDelete(id);
                toast.dismiss(t.id);
              }}>Yes</button>
            <button className='bg-green-600 ml-3 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
          </div>
        </div>
      ),
    );
  };

  // Function to handle date update
  const handleDateUpdate = async (id) => {
    if (!newDate) return toast.error("Please select a date.");

    try {
      // Send PUT request to update the booking date
      await axios.put(`${import.meta.env.VITE_API_URL}/booking/${id}`, { date: newDate });

      fetchAllCars();  // Re-fetch the updated bookings
      toast.success('Booking Date Updated Successfully!');
      setEditingDate(null);  // Close the date picker
    } catch (err) {
      toast.error("Error updating date: " + err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-bold mt-5 mb-5">Your Booking Details</h1>
      <div className="overflow-x-auto mt-5 w-11/12 mx-auto bg-blue-300 mb-5">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Booking Date</th>
              <th>Price</th>
              <th>Booking Count</th>
              <th>Booking Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map(car => (
                <tr key={car._id}>
                  <td>
                    <div className="flex items-center gap-3 hover:shadow-2xl hover:shadow-yellow-700">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={car.photo}
                            alt="Car" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{car.model}</td>
                  <td>
                    {editingDate === car._id ? (
                      <div>
                        <DatePicker
                          selected={newDate || new Date(car.date)}
                          onChange={date => setNewDate(date)}
                          showTimeSelect
                          dateFormat="Pp"
                        />
                        <button
                          onClick={() => handleDateUpdate(car._id)}
                          className="btn bg-blue-500 mt-2"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <span>{format(new Date(car.date), 'Pp')}</span>
                    )}
                  </td>
                  <td>$ {car.price}</td>
                  <td>{car.count}</td>
                  <td className="text-yellow-600">{car.available}</td>
                  <th>
                    <button onClick={() => toastDelete(car._id)} className="btn text-red-500">
                      <RiDeleteBin6Line /> Cancel
                    </button>
                    <button
                      onClick={() => setEditingDate(car._id)}
                      className="btn text-blue-500 ml-3"
                    >
                      Edit Date
                    </button>
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default MyBooking;



