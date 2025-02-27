import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='sticky top-0 flex justify-between'>
        <div>Shrey Sharma</div>
        <div className='flex gap-5'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/">Resumes</Link>
        </div>
      
    </div>
  )
}

export default Header
