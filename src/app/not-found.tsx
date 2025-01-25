import React from 'react'
import Navbar from '@/components/navbar'

export default function Page() {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <Navbar />
        <div className='flex items-center justify-center h-full'>
            <h1 className='text-4xl'>404 | Not Found</h1>
        </div>
    </div>
  )
}
