import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";
import Card from "./Card";

export default function Popular() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getMovies();
      setMovies(data.slice(0, 4));
    })();
  }, []);
  return (
    <div className="w-full p-4 bg-black">
      {/* Main container */}
      <h1 className="text-white container mx-auto font-bold text-xl md:text-2xl py-2">Popular movies:</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Card container */}
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
