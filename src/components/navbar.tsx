"use client";
import React from "react";
import Logo from "../../public/netflix_logo.svg";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navlink } from "@/types/types";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const links: Navlink[] = [
    { name: "Home", url: "/" },
    { name: "TV Shows", url: "/home/tv-shows" },
    { name: "Movies", url: "/home/movies" },
    { name: "New & Popular", url: "/home/new-popular" },
    { name: "My List", url: "/my-list" },
  ];
  const pathname = usePathname();

  return (
    <nav className="w-full flex px-7 py-4 items-center">
      <Image src={Logo} alt="logo" width={120} priority />
      <div className="flex-grow flex justify-between items-center ml-10">
        <ul className="md:flex gap-10 hidden">
          {links.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.url}
                className={`${
                  pathname === item.url
                    ? "underline underline-offset-4"
                    : "none"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex relative gap-4 items-center justify-end w-full">
          <Search />
          <Bell />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-8 h-8 rounded-sm">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-7">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="absolute top-[90vh] right-0">
            <ModeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
