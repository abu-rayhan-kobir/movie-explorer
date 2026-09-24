import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovie } from "../services/getMovie";
import { MdStarRate } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export default function Details() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getMovie(Number (id));
      setMovie(data);
    })();
  }, [id]);
  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      {/* Main container */}
      <div className="w-full border border-white flex flex-col rounded-md p-1 gap-1 md:flex-row max-w-7xl shadow-sm shadow-gray-300">
        <div className="md: flex-1">
          {/* Left side */}
          {/* Top */}
          <figure className="aspect-video md:h-full md:aspect-auto">
          <img
            src={movie?.image?.original}
            alt={movie?.name}
            className="size-full object-cover rounded-md border border-white"
          />
        </figure>
        </div>
        <div className="bg-gray-100 border rounded-md p-1 flex flex-col gap-2 md:flex-2">
          {/* Right side */}
          {/* Bottom */}
          <div className="flex flex-col gap-1">
            <p className="font-bold">{movie?.name}</p>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1 font-bold"><span>Rating:</span><MdStarRate /><span>{movie?.rating?.average}</span></p>
              <p className="flex items-center gap-1 font-bold"><span>Release:</span><FaCalendarAlt /><span>{new Date(movie?.premiered).getFullYear()}</span></p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: movie?.summary }} className="font-semibold"></div>
        </div>
      </div>
    </div>
  );
}
