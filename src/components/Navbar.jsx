import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="bg-black">
      {/* Main container */}
      <div className="container mx-auto border border-white p-2 rounded-md flex items-center justify-between">
        <Link
          to={"/"}
          className="text-xl md:text-2xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
        >
          Movie Explorer
        </Link>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold cursor-pointer border-b-2 border-white"
              : "text-white font-bold cursor-pointer"
          }
        >
          Movies
        </NavLink>
      </div>
    </div>
  );
}
