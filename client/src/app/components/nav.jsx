import React from 'react'
import Link from 'next/link'

export default function nav() {
  return (
    <div className='container px-2 p-4'>
        <container className='px-2'>
          <Link href="/">
            <img className="inline w-10" src="../favicon.ico" alt="Icon" />
          </Link>
          <Link className='p-4 text-white' href="/">Home</Link>
          <Link className='p-4 text-white' href="/aboutme">About me</Link>
          <Link className='p-4 text-white' href="/project">Project</Link>
          {/* <Link className='p-4 text-white' href="/blog">Blog</Link> */}
        </container>
    </div>
  )
}
