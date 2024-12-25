import axios from 'axios';
import { useEffect, useState } from 'react';
import {toast, Toaster} from "react-hot-toast";
import { useNavigate, useParams } from 'react-router-dom';

const CarDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  useEffect(() => {
    fetchUpdateCars();
  }, [id]);

  const fetchUpdateCars = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/car/${id}`);
    setCar(data);
  };

//   console.log(car);

  const {
    model,
    price,
    available,
    features,
    photo,
    description,
    count,
    date
  } = car || {};

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleClick = async () => {
    try {
        const bookingData = {
          photo,
          model,
          price,
          available,
          count,
          date,
          carId: id, 
        };
        // console.log(bookingData)
    
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/book-car`, bookingData);
    
        if (response.status === 200) {
          toast.success("Booking confirmed!");
          closeModal(); 
          navigate('/available-car')
        } else {
          alert("Booking failed. Please try again.");
        }
      } catch (error) {
        console.error("Error booking car:", error);
        alert("Something went wrong. Please try again later.");
      }
    };
  

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-md border border-red-300 mt-7 mb-7">
        <figure>
          <img
            className='w-10/12 mx-auto h-72 rounded-md mt-2 object-cover'
            src={photo}
            alt="Cars"
          />
        </figure>
        <div className="card-body mx-28">
          <h2 className="card-title text-2xl font-bold">Model: {model}</h2>
          <p className='font-semibold text-xl'>Price Per Day: ${price}</p>
          <p className='font-semibold text-xl'>Availability: {available}</p>
          <p className='font-semibold text-xl'>Features: {features}</p>
          {/* <p className='font-semibold text-xl'>Count: {count}</p> */}
          <p className='font-semibold text-xl'>Description: {description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-lime-400" onClick={openModal}>Book Now</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Booking Details</h2>
            <p><strong>Model:</strong> {model}</p>
            <p><strong>Price Per Day:</strong> ${price}</p>

            <div className="mt-4 flex justify-end">
              <button
                className="btn bg-red-400 text-white mr-2"
                onClick={closeModal} 
              >
                Close
              </button>
              <button onClick={handleClick} className="btn bg-lime-400 text-white">Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
      <Toaster></Toaster>
    </div>
  );
};

export default CarDetails;

