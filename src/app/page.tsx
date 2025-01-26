'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { status } = useSession(); 
  useEffect(() => {
    if(status !== 'authenticated') {
      router.replace('/login')
    }
  }, [status, router]);
  return (
    <div className='w-full h-screen'>
      <Navbar />
    </div>
  )
}
