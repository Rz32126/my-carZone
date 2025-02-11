import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";


const RecentListing = () => {
    return (
         <div>
            <h1 className="text-3xl text-center text-blue-950 font-bold mb-5 mt-5">Recent Listing</h1>
                 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-4">
            <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 mx-auto mt-3 rounded-3xl h-32 object-cover"
                   src="https://i.ibb.co.com/3cJ1cSS/Screenshot-2024-12-22-221533.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Jeep Camry 2024</p>
                   <p>Daily Price: $65/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-green-500"><MdEventAvailable /></span></p>
                   <p>Date Posted: 25/12/2024</p>
               </div>
           </div>
           <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 h-32 object-cover mx-auto mt-3 rounded-3xl"
                   src="https://i.ibb.co.com/QkCJCZN/Screenshot-2024-12-23-013220.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Mercedes 2022</p>
                   <p>Daily Price: $55/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-green-500"><MdEventAvailable /></span></p>
                   <p>Date Posted: 24/12/2024</p>
               </div>
           </div>
           <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 h-32 object-cover mx-auto mt-3 rounded-3xl"
                   src="https://i.ibb.co.com/T2BRdCD/Screenshot-2024-12-23-013115.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Cadillac 2023</p>
                   <p>Daily Price: $80/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-red-500"><CgUnavailable /></span></p>
                   <p>Date Posted: 25/12/2024</p>
               </div>
           </div>
           <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 h-32 object-cover mx-auto mt-3 rounded-3xl"
                   src="https://i.ibb.co.com/GvFqdkY/Screenshot-2024-12-23-013156.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Audi 2022</p>
                   <p>Daily Price: $49/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-green-500"><MdEventAvailable /></span></p>
                   <p>Date Posted: 23/12/2024</p>
               </div>
           </div>
           <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 h-32 object-cover mx-auto mt-3 rounded-3xl"
                   src="https://i.ibb.co.com/yQkbXps/Screenshot-2024-12-22-221612.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Toyota Camry 2023</p>
                   <p>Daily Price: $55/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-red-500"><CgUnavailable /></span></p>
                   <p>Date Posted: 21/12/2024</p>
               </div>
           </div>
           <div className="card card-compact hover:shadow-xl border border-gray-300">
              <figure>
                 <img
                   className="w-11/12 h-32 object-cover mx-auto mt-3 rounded-3xl"
                   src="https://i.ibb.co.com/Qj4GQ6g/Screenshot-2024-12-23-023426.png"
                   alt="Shoes" />
              </figure>
               <div className="card-body ml-5">
                   <p>Model: Ferrari 2022</p>
                   <p>Daily Price: $95/Day</p>
                   <p className="flex">Availability: <span className="text-xl text-green-500"><MdEventAvailable /></span></p>
                   <p>Date Posted: 23/12/2024</p>
               </div>
           </div>
           
        </div>
         </div>
    );
};

export default RecentListing;