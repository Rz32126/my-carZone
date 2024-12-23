
const Slide = ({ image, text }) => {
  return (
    <div
      className='w-11/12 mx-auto bg-center bg-cover h-80'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h1 className='font-semibold text-black'>
            {text}
          </h1>
          <p className='w-full px-5 py-4 mt-4 text-black flex gap-4'>
           Profile Image: <img className="w-12 h-12 rounded-full object-cover mb-4" src="https://i.ibb.co.com/L9wmFDt/Screenshot-2024-12-23-031210.png"/>
          </p>
          <p className='w-full px-5 py-4 mt-4'>
            Rating : <div className="rating ml-6 mt-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
          </p>
          <p className='w-full px-5 py-4 mt-4'>
            Review : Amazing Cars, Highly Recommend..
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slide
