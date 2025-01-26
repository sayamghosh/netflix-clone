import React from 'react'
import Navbar from '@/components/navbar'

export default function page() {
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <h2 className='text-5xl'>This is a private page</h2>
    </div>
  )
}
