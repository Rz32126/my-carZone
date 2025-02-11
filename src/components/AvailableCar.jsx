// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import AllCarsCard from "./AllCarsCard";
// import { AuthContext } from "./AuthProvider";

// const AvailableCar = () => {
//   const {loading} = useContext(AuthContext)
//   const [cars, setCars] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sort, setSort] = useState('');
//   const [layout, setLayout] = useState('grid');

//   useEffect(() => {
//     const fetchAllCars = async () => {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-cars?search=${search}&sort=${sort}`);
//       setCars(data);
//     };
//     fetchAllCars();
//   }, [search, sort]);


//   return (
//     <div>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4 mb-5">

//         <form>
//           <div className="flex p-1 overflow-hidden border rounded-lg">
//             <input
//               className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
//               type="text"
//               name="search"
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Enter Car Model"
//             />

//             <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:bg-green-600 focus:outline-none">
//               Search
//             </button>
//           </div>
//         </form>

//         <div>
//           <select
//             name="sort"
//             id="sort"
//             onChange={(e) => setSort(e.target.value)}
//             className="border p-4 rounded-md"
//           >
//             <option value="">Sort By Price</option>
//             <option value="dsc">Descending Order</option>
//             <option value="asc">Ascending Order</option>
//           </select>
//         </div>
//         <div>
//           <button
//             onClick={() => setLayout('list')}
//             className={`btn ${layout === 'list' ? 'bg-yellow-500' : ''}`}
//           >
//             List Layout
//           </button>
//           <button
//             onClick={() => setLayout('grid')}
//             className={`btn ${layout === 'grid' ? 'bg-green-500' : ''}`}
//           >
//             Grid Layout
//           </button>
//         </div>
//       </div>

//       <div className={`mt-5 ${layout === 'grid' ? 'grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3' : 'space-y-5'}`}>
//         {cars.map(car => (
//           <AllCarsCard key={car._id} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableCar;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AllCarsCard from "./AllCarsCard";
import { AuthContext } from "./AuthProvider";

const AvailableCar = () => {
  const { loading } = useContext(AuthContext); 
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [layout, setLayout] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        setIsLoading(true); 
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-cars?search=${search}&sort=${sort}`);
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      } finally {
        setIsLoading(false);  
      }
    };

    fetchAllCars();
  }, [search, sort]);

  return (
    <div className="mb-5">
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Car Model"
            />
            <button
              type="submit"
              className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

        <div>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Price</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => setLayout('list')}
            className={`btn ${layout === 'list' ? 'bg-yellow-500' : ''}`}
          >
            List Layout
          </button>
          <button
            onClick={() => setLayout('grid')}
            className={`btn ${layout === 'grid' ? 'bg-blue-500' : ''}`}
          >
            Grid Layout
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-blue-600"></div>
        </div>
      ) : (
        <div className={`mt-5 ${layout === 'grid' ? 'grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3' : 'space-y-5'}`}>
          {cars.map(car => (
            <AllCarsCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCar;
