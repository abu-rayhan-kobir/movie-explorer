import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../assets/hero.png";
import { Link } from "react-router";
export default function Hero() {
  return (
    <section className="bg-black pt-5">
      <div className="container mx-auto">
        <div className="relative">
          <figure className="aspect-video">
            <img src={hero} alt="hero" className="brightness-30 size-full object-cover"/>
          </figure>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 tigit text-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent brightness-50">
              Discover Movies <br /> You'll Love
            </h1>
            <p className="tracking-tight text-zinc-300 brightness-50 font-semibold">
              Explore thousands of movies, <br /> discover hidden gems, <br /> and find your next favorite story.
            </p>
            <Link to = {"/movies"}>
              <button className="border tracking-tight w-fit flex items-center gap-1 px-2 py-1 cursor-pointer font-bold rounded-md bg-black text-white shadow-sm hover:shadow-md shadow-gray-400" type="button"><span>Explore more</span><FaArrowRightLong /></button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
