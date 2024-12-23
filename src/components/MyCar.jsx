import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "./AuthProvider";


const MyCar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="overflow-x-auto mt-5 w-11/12 mx-auto bg-lime-200">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
        <th>Car-Image</th>
        <th>Car-Model</th>
        <th>Daily-Rent</th>
        <th>Availability</th>
        <th>Date-Added</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          mm
        </td>
        <td>rr</td>
        <td>Purple</td>
        <td>11/10/2024</td>
        <th>
          <button className="btn text-orange-400 text-xl mr-2"><FaRegEdit /></button>
          <button className="btn text-red-500 text-xl"><RiDeleteBin6Line /></button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCar;