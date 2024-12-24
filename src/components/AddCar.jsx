import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const AddCar = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)
    const handleAddCar = async event => {
        event.preventDefault()

        const form = event.target;

        const model = form.model.value;
        const price = parseFloat(form.price.value);
        const available = form.available.value;
        const registration = form.registration.value;
        const features = form.features.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const email = form.email.value;
        const date = startDate

        const formData = {
            model,
            price,
            available,
            registration,
            features,
            description,
            photo,
            location,
            date,
            count: 0,
            rental: {
                email,
                name:user?.displayName,
                photo:user?.photoURL
            }
        }
 
        // console.log(formData)

        try{
          await axios.post(`${import.meta.env.VITE_API_URL}/add-car`, formData)
        //   console.log(data)
          form.reset()
          toast.success('Car added Successfully!!!')
        } catch (err) {
          console.log(err)
          toast.error(err.message || 'An error adding the car!')
        }
  
    }    
    return (
        <div className="lg:w-7/12 bg-purple-400 mx-auto py-2 mt-5 mb-5">
        <h1 className="text-2xl mt-7 font-bold text-center">Add Your Car</h1>  
       <form onSubmit={handleAddCar}>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Car Model</span>
            </label>
            <input type="text" name="model" placeholder="Car Model" className="input input-bordered" required />
         </div>
         <div className="flex justify-around">
                <div className="form-control w-5/12 mx-auto">
                      <label className="label">
                        <span className="label-text font-semibold">Daily Rental Price</span>
                     </label>
                     <input type="text" name="price" placeholder="$ : Price" className="input input-bordered" required />
               </div>
               <div className="form-control w-5/12 mx-auto">
                    <label className="label">
                       <span className="label-text font-semibold">Availability</span>
                   </label>
                   <input type="text" name="available" placeholder="Yes / No" className="input input-bordered" required />
              </div>
         </div>
         <div className="flex justify-around">
                <div className="form-control w-5/12 mx-auto">
                      <label className="label">
                        <span className="label-text font-semibold">Vehicle Registration Number</span>
                     </label>
                     <input type="text" name="registration" placeholder="Registration Number" className="input input-bordered" required />
               </div>
               <div className="form-control w-5/12 mx-auto">
                    <label className="label">
                       <span className="label-text font-semibold">Features</span>
                   </label>
                   <input type="text" name="features" placeholder="(e.g., GPS, AC, etc.)" className="input input-bordered" required />
              </div>
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <input type="text" name="description" placeholder="Write Your Description Here" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Image Url</span>
            </label>
            <input type="string" name="photo" placeholder="Photo Url" className="input input-bordered" required />
         </div>
         <div className="form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input type="text" name="location" placeholder="Write your Location" className="input input-bordered" required />
            
         </div>
         <div className="hidden form-control w-11/12 mx-auto">
            <label className="label">
              <span className="label-text font-semibold">email</span>
            </label>
            <input type="email" name="email" defaultValue={user.email}
            disabled={true}
            placeholder="email" className="input input-bordered" required />
         </div>
         <div className="flex justify-between mt-2">
             <div className="mt-2 mx-8">
                
                <DatePicker
                  className='border p-2 rounded-md'
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                 />
                 <label className="ml-1">date</label>
             </div>
             <div className="mr-10">
                  <input type="submit" value="Add Car" className="btn bg-yellow-600 text-white mb-5 mt-3"></input>
             </div>
         </div>
       </form>
        
    <Toaster></Toaster>

        </div>
    );
};

export default AddCar;