import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";
import Card from "../components/Card";

export default function Movies () {
  const [movies, setMovies] = useState ([]);
  useEffect (() => {
    (async () => {
      const data = await getMovies();
      setMovies (data);
    })();
  }, []);
  
  return (
    <div className="w-full p-4 bg-black">
      {/* Main container */}
      <div className="h-screen overflow-y-auto container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Card container */}
      {movies.map ((movie) => <Card key={movie.id} movie = {movie}/>)}
      </div>
    </div>
  );
}