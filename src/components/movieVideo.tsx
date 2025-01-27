import React from "react";

export default function MovieVideo() {
  return (
    <>
      <div className="absolute md:top-0 -z-10 w-screen h-[23vh] md:h-[50vh] lg:h-[60vh] overflow-hidde">
        <video
          autoPlay
          muted
          loop
          src="/hero.mp4"
          className="w-full h-full object-cover object-center brightness-[50%]"
        ></video>
      </div>
    </>
  );
}
