import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

export default function NotFound () {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      {/* Main container */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center gap-4">
        {/* Container */}
        <h1 className="text-white text-xl md:text-2xl">404 Page Not Found!</h1>
        <Link to = {"/"} className="text-white flex items-center gap-2 border border-white px-2 py-1 rounded-md font-bold shadow-sm shadow-gray-300 hover:shadow-md hover:shadow-gray-100"><span>Home</span><FaArrowRightLong /></Link>
      </div>
    </div>
  );
}