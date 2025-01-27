'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import MovieVideo from '@/components/movieVideo'

export default function Page() {
  return (
    <div className='w-full h-screen relative'>
      <Navbar />
      <MovieVideo />
      
    </div>
  )
}
