import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";
import Card from "../components/Card";
import { SearchBar } from "../components/SearchBar";

export default function Movies () {
  const [movies, setMovies] = useState ([]);
  useEffect (() => {
    (async () => {
      const data = await getMovies();
      setMovies (data);
    })();
  }, []);
  
  return (
    <div className="w-full p-4 bg-black relative">
      <SearchBar setMovies = {setMovies}/>
      <h1 className="font-bold text-xl md:text-2xl text-white container mx-auto py-2">All Movies:</h1>
      {/* Main container */}
      {
        movies.length === 0
        &&
        (
          <div className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            Movie Not Found!
          </div>
        )
      }
      <div className="h-screen overflow-y-auto container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Card container */}
      {movies.map ((movie) => <Card key={movie.id} movie = {movie}/>)}
      </div>
    </div>
  );
}