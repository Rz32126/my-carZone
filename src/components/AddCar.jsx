// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";


const AddCar = () => {
    const handleAddCar = async event => {
        // const { user } = useContext(AuthContext)
        event.preventDefault()

        const form = event.target;

        const model = form.model.value;
        const price = parseFloat(form.price.value);
        const available = form.available.value;
        const registration = form.registration.value;
        const features = form.features.value;
        const description = form.description.value;
        const count = form.count.value;
        const photo = form.photo.value;
        const location = form.location.value;

        const formData = {
            model,
            price,
            available,
            registration,
            features,
            description,
            count: 0,
            photo,
            location,
            date: 12/12/2024,
            // email: user?.email
        }
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
        <div className="lg:w-7/12 bg-purple-400 mx-auto py-2">
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
              <span className="label-text font-semibold">Booking Count</span>
            </label>
            <input type="text" name="count" placeholder="Count : 0" className="input input-bordered" required />
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
         <div className="flex justify-center">
            <input type="submit" value="Add Car" className="btn bg-yellow-600 text-white mb-5 mt-3"></input>
         </div>
       </form>
        
    <Toaster></Toaster>

        </div>
    );
};

export default AddCar;