"use client";
import Navbar from "@/components/navbar";
import MovieVideo from "@/components/movieVideo";
import MovieCard from "@/components/movieCard";
import movie from "@/utils/moviedata";

export default function Page() {
  return (
    <div className="w-full h-full relative ">
      <Navbar />
      <MovieVideo />
      <h1 className="text-3xl mt-[30vh] md:mt-[55vh]  max-w-screen-xl mx-auto px-5 md:px-0">Recently Added</h1>
      <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 max-w-screen-xl mx-auto py-10 justify-items-center px-6 md:px-0">
        {movie.map((item,index)=>(
          <MovieCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
