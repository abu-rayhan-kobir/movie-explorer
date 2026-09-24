import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-black pt-5">
      {/* Main container */}
      <div className="container mx-auto flex flex-col justify-center text-center gap-4 border border-white rounded-md">
        {/* Container */}
        <Link to={"/"} className="text-xl md:text-2xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer">
          Movie Explorer
        </Link>
        <p className="text-white flex items-center gap-1 mx-auto">
          <FaCopyright />
          <span>
            {new Date().getFullYear()} Movie Explorer. Discover your next favorite movie.
          </span>
        </p>
      </div>
    </div>
  );
}
