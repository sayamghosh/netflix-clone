import React from 'react'
import { Input } from "@/components/ui/input"
import { ModeToggle } from '@/components/mode-toggle'

export default function page() {
  return (
    <div className='w-1/2 mx-auto mt-10  p-16'>
      <ModeToggle />
      <Input type="email" placeholder="Email" />
    </div>
  )
}
