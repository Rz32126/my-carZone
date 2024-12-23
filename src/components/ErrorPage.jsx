import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center text-red-600 font-bold mt-5 mb-4 text-3xl">Opps!!! You Come in Wrong Zone</h1>
            <img
             className="w-8/12 h-96 mx-auto"
             src="https://i.ibb.co.com/JnXSX76/dynamic-wang-c-D-fb-Y6yww-unsplash.jpg"></img>
             <div className="flex justify-center mt-3">
             <Link to="/"><button className="btn bg-lime-400 text-purple-700 text-center">Go Back Home --</button></Link>
             </div>
        </div>
    );
};

export default ErrorPage;