import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router";

export default function Card({ movie }) {
  return (
    <div className="border border-white flex flex-col gap-2 rounded-md bg-black shadow-sm shadow-gray-500 hover:shadow-gray-100 p-1">
      <div>
        <figure className="aspect-square">
          <img
            src={movie?.image?.original}
            alt={movie?.name}
            className="size-full object-cover rounded-md border border-white"
          />
        </figure>
      </div>
      <div className="border flex flex-col gap-2 bg-white rounded-md p-2">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">{movie?.name}</h1>
          <div className="flex flex-col-reverse items-center">
            <p className="flex items-center gap-1">
              <span className="font-bold">{movie?.rating?.average}</span>
              <span>
                <MdStarRate />
              </span>
            </p>
            <p className="flex items-center gap-1">
              <span>
                <FaCalendarAlt />
              </span>
              <span className="font-bold">
                {new Date(movie?.premiered).getFullYear()}
              </span>
            </p>
          </div>
        </div>
        <Link to={`/movies/${movie?.id}`}>
          <button
            type="button"
            className="w-full border cursor-pointer rounded-md px-2 py-1 font-bold shadow-md shadow-gray-700 hover:shadow-black bg-black text-white flex items-center justify-center gap-2"
          >
            <span>View Details</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
