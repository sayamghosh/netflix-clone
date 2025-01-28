import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import { Play } from "lucide-react";

interface MovieData {
  id: number;
  title: string;
  age: number;
  duration: number;
  overview: string;
  videoSource: string;
  imageString: string;
  release: number;
  category: string;
  youtubeString: string;
}

export default function MovieCard({data}:{data:MovieData}) {
  return (
    <div className="relative rounded-md ">
      <Image
        src={
          data.imageString
        }
        alt="movie"
        width={500}
        height={400}
        className="object-cover rounded-md"
      />
      <div className="layer absolute top-0 left-0 w-full h-full hover:scale-125 opacity-0 hover:opacity-100 transform transition duration-300 rounded-m z-10">
        <div className="relative ">
          <Image
            src={
              data.imageString
            }
            alt="movie"
            width={500}
            height={400}
            className="object-cover brightness-50 rounded-md"
          />
          <div className="absolute top-0 w-full h-full px-4 py-2 flex flex-col justify-between">
            <div className="flex justify-between w-full items-center">
              <h2 className="text-sm font-semibold">{data.title}</h2>
              <Heart />
            </div>
            <div className="tracking-normal text-xs font-medium">
              <p className="capitalize">{data.category}</p>
              <p className="font-bold">{data.duration} hrs</p>
              <p className="truncate">{data.overview}</p>
            </div>
              <Play className="absolute top-1/2 left-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
