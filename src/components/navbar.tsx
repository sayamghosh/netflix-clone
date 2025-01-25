import React from "react";
import Logo from "../../public/netflix_logo.svg";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  interface Navlink {
    name: string;
    url: string;
  }
  const links: Navlink[] = [
    { name: "Home", url: "/" },
    { name: "TV Shows", url: "/home/tv-shows" },
    { name: "Movies", url: "/home/movies" },
    { name: "New & Popular", url: "/home/new-popular" },
    { name: "My List", url: "/my-list" },
  ];

  return (
    <div className="w-full flex px-7 py-2 justify-between items-center">
      <Image src={Logo} alt="logo" width={120} />
      <ul className="flex gap-10">
        {links.map((item, idx) => (
          <li key={idx}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </div>
  );
}
