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
import { Avatar,AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { data: session } = useSession();
  const links: Navlink[] = [
    { name: "Home", url: "/" },
    { name: "TV Shows", url: "/home/tv-shows" },
    { name: "Movies", url: "/home/movies" },
    { name: "New & Popular", url: "/home/new-popular" },
    { name: "My List", url: "/my-list" },
  ];
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="w-full flex px-7 py-4 items-center">
      <Image src={Logo} alt="logo" width={120} priority />
      <div className="flex lg:justify-between justify-end items-center ml-10 w-full">
        <ul className="lg:flex gap-10 hidden w-full items-center">
          {links.map((item, idx) => (
            <li key={idx} className={`${pathname === "/"?"text-white":null}`}>
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
        <div className="flex relative gap-4 items-center">
          <Search className={`${pathname === "/"?"text-foreground md:text-white":null}`}  />
          <Bell className={`${pathname === "/"?"text-foreground md:text-white":null}`} />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-8 h-8 rounded-sm">
                <AvatarImage
                  src={session?.user?.image|| ""}
                  alt="@shadcn"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-7">
              <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  signOut();
                }}
              >
                Signout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="fixed top-[90vh] right-7">
            <ModeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
