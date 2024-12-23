import { TbBrandBooking, TbRelationManyToMany } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";

const ChoosePage = () => {
    return (
       <div>
            <h1 className="font-bold text-center text-2xl mt-3 text-orange-500">Why Choose Us ??</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mb-5 mt-5">
           <div className="card bg-orange-200 border-orange-300 border">
              <div className="card-body">
                   <h2 className="card-title font-semibold text-orange-500"><span className="text-blue-900 text-2xl"><TbRelationManyToMany /></span>Wide Variety of Cars</h2>
                   <p>You Can choose your want one car according to your budget.You can Get here more luxury to cheapest car Here.</p>
            </div>
           </div> 
           <div className="card bg-orange-200  border-orange-300 border">
              <div className="card-body">
                   <h2 className="card-title font-semibold text-orange-500"><span className="text-green-700 text-2xl"><MdOutlinePriceCheck /></span>Affordable Prices</h2>
                   <p>If you want you can compare our price rate from other. The price is really budget friendly no tension!!!</p>
            </div>
           </div>
           <div className="card bg-orange-200  border-orange-300 border">
              <div className="card-body">
                   <h2 className="card-title font-semibold text-orange-500"><span className="text-rose-500 text-2xl"><TbBrandBooking /></span>Easy Booking Process</h2>
                   <p>You can take our services just in onclick.Just book your favorite one and enjoy your time.Booking is possible from any-place.</p>
            </div>
           </div>
           <div className="card bg-orange-200  border-orange-300 border">
              <div className="card-body">
                   <h2 className="card-title font-semibold text-orange-500"><span className="text-2xl"><FcOnlineSupport /></span>Customer Support</h2>
                   <p>24\7 Support Wow!! If you face any problem in anywhere in our service do not waste time please contact as soon as possible.We will fix </p>
            </div>
           </div>
        </div>
       </div>
    );
};

export default ChoosePage;