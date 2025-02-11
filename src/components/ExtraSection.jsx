import { easeOut, motion } from "framer-motion";

const ExtraSection = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5 mb-5 text-blue-500">Explore Our Other Exclusive Services</h1>
            <div className="hero bg-blue-300 mb-4 w-9/12 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center">
   <div className="flex-1">
   <img
      src="https://i.ibb.co.com/DW6Xf58/Screenshot-2024-12-26-030339.png"
      className="max-w-md h-40 object-cover rounded-t-[40px] rounded-br-[40px]" />
      <motion.img
       animate={{ x:200, y:-150}}
       transition={{ duration: 10, delay: 3, ease: easeOut, repeat: Infinity}}
      src="https://i.ibb.co.com/Nxhjm8n/Screenshot-2024-12-26-030641.png"
      className="max-w-md h-40 object-cover rounded-t-[40px] rounded-br-[40px]" />
   </div>
    <div className="flex-1">
      <h1 className="text-xl font-bold">We Added Some amazing services here.</h1>
      <p className="py-6">
       We are happily announced that we add some new services for your betterment like hotel booking, guide and many more with travel related.
      </p>
      <button className="btn bg-gray-300">Explore More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExtraSection;