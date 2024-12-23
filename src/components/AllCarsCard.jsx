import React from 'react';

const AllCarsCard = ({ car }) => {
    const {
        model,
        price,
        available,
        // registration,
        features,
        description,
        photo,
        location} = car || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-md border border-blue-200">
  <figure>
    <img
      className='w-11/12 mx-auto h-40 object-cover rounded-md mt-2'
      src={photo}
      alt="Cars" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Model: {model}</h2>
    <p className='font-semibold'>Price Per Day: ${price}</p>
    <p className='font-semibold'>Availability: {available}</p>
    <p className='font-semibold'>Features: {features}</p>
    <div className="card-actions justify-center">
      <button className="btn">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCarsCard;