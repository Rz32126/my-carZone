import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div
  className="hero min-h-96 object-cover"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/yQkbXps/Screenshot-2024-12-22-221612.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-20 text-4xl font-bold shadow-md shadow-red-500">Drive Your Dreams Today!</h1>
      <Link to="/available-car" className="btn bg-blue-950 text-yellow-700 shadow-md shadow-red-500">View Available Cars</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;