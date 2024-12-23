import { useContext } from "react";
import { FaCarSide } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() => {
      console.log('log out')
    })
    .catch(error => {
      console.log('failed')
    })
  }
    return (
        <div>
            <div className="navbar bg-blue-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-blue-950">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/available-car">Available Cars</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-xl text-lime-500 lg:font-bold"><span className="text-blue-600 lg:text-3xl lg:mr-4"><FaCarSide /></span>CAR_RENT_ZONE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-blue-900">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/available-car">Available Cars</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <div>
        <ul className="lg:flex gap-4 font-semibold text-lime-600">
        <li><Link to="/add-car">Add Cars</Link></li>
        <li><Link to="/my-car">My Cars</Link></li>
        <li><Link to="/my-booking">My Bookings</Link></li>
        </ul>
      </div>
      <button onClick={handleLogOut} className="ml-4 btn bg-red-300">Log out</button>
      </> : <>
      <Link to="/login" className="btn bg-lime-300">Login</Link>
      </>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;