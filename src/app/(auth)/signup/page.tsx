import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

export default function Page() {
  return (
    <div className='bg-black/90 py-6 px-6 rounded w-[20rem] mx-auto h-fit'>
      <form className='space-y-3'>
        <h2 className='text-xl'>Signup</h2>
        <Input type="email" placeholder="Email" className='bg-[#333] placeholder:text-xs placeholder:text-gray-400  w-full' />
        <Input type="password" placeholder="Password" className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full ' />
        <Button className='w-full bg-[#e50914] hover:bg-red-800 text-white font-semibold'>Signup</Button>
      </form>
      <div className='text-sm text-gray-600 mt-2'>
      Already have an account?<Link href={'/signup'} className='text-white hover:underline ml-1'>Signup now!</Link>
      </div>
      <div className='w-full items-center justify-center flex mt-4 gap-2'>
        <Button size="icon" variant={"outline"}><FcGoogle /></Button>
        <Button size="icon" variant={"outline"}><SiGithub /></Button>
      </div>
    </div>
  )
}
