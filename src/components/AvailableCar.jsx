import axios from "axios";
import { useEffect, useState } from "react";
import AllCarsCard from "./AllCarsCard";


const AvailableCar = () => {
    const [cars, setCars] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    useEffect(() => {
        const fetchAllCars = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-cars?search=${search}&sort=${sort}`)
            setCars(data)
        }
        fetchAllCars()
    }, [search,sort])

    // console.log(cars)

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-4 mb-5'>

              <form>
               <div className='flex p-1 overflow-hidden border rounded-lg'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={e => setSearch(e.target.value)}
                placeholder='Enter Car Model'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:bg-green-600 focus:outline-none'>
                Search
               </button>
             </div>
             </form>
             <div>
                 <select
                    name='sort'
                    id='sort'
                    onChange={e => setSort(e.target.value)}
                    className='border p-4 rounded-md'>
                     
                       <option value=''>Sort By Price</option>
                       <option value='dsc'>Descending Order</option>
                      <option value='asc'>Ascending Order</option>
                 </select>
              </div>
                  <button className='btn'>List layout</button>
        </div>
           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {
                cars.map(car => <AllCarsCard key={car._id} car={car}></AllCarsCard>)
            }
           </div> 
        </div>
    );
};

export default AvailableCar;