import { Link } from "react-router-dom";


const Offer = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-purple-700 font-bold mb-4">Special Offers</h1>
         <div className="grid lg:grid-cols-2 grid-cols-1 mb-4 mt-3 gap-4">
             <div className="card bg-base-100 image-full  shadow-xl inline-block transition-transform duration-300 hover:animate-bounce">
            <figure>
                 <img
                 src="https://i.ibb.co.com/bWRSYm6/Screenshot-2024-12-23-133523.png"
                 alt="Car" />
             </figure>
             <div className="card-body">
                <h2 className="card-title text-yellow-300 font-serif text-2xl ">Get 15% off for weekend rentals!</h2>
                <p>Luxury cars at $99/day this holiday season!</p>
             <div className="card-actions justify-end">
               <Link to="/available-car">
                  <button className="btn bg-yellow-200">Learn More</button>
               </Link>
            </div>
            </div>
            </div>
            <div className="card bg-base-100 image-full  shadow-xl hover inline-block transition-transform duration-300 hover:animate-bounce">
            <figure>
                 <img
                 src="https://i.ibb.co.com/r0qdFxq/Screenshot-2024-12-23-134348.png"
                 alt="Car" />
             </figure>
             <div className="card-body">
                <h2 className="card-title text-yellow-300 font-serif text-2xl">Get 25% off for weekend rentals!</h2>
                <p>Luxury cars at $199/day this holiday season!</p>
             <div className="card-actions justify-end">
             <Link to="/available-car">
                  <button className="btn bg-yellow-200">Learn More</button>
               </Link>
            </div>
            </div>
            </div>

         </div>
        </div>
    );
};

export default Offer;