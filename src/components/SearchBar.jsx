import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getMoviesByTitle } from "../services/getMoviesByTitle";


export function SearchBar ({setMovies}) {
  const [input, setInput] = useState ("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.length === 0) return;
    const data = await getMoviesByTitle (input);
    setMovies (data.map ((eachData) => eachData.show));
    setInput ("");
  }
  return (
    <div className="bg-black text-white">
      {/* Main container */}
      <div className="container mx-auto flex justify-center items-center">
        {/* Container */}
        <form onSubmit={handleSubmit} action="" className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="search-bar" className="font-bold">
            Search by title
          </label>
          <div className="flex items-center gap-1">
            <input onChange={(event) => setInput (event.target.value)} value={input} type="text" name="" id="search-bar" placeholder="Search movie by title..." className="border border-white px-2 py-1 rounded-md" />
            <button type="submit" className="border border-white flex items-center px-2 py-1 cursor-pointer gap-1 font-bold rounded-md shadow-sm shadow-gray-300 hove:shadow-md hover:shadow-gray-100"><span>Search</span><FaMagnifyingGlass /></button>
          </div>
        </form>
      </div>
    </div>
  );
}