"use client"
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
       <nav className="navbar">
        <h1 className="logo">TechGuY</h1>
        <ul className="nav-Links">
        <Link href={"/"} className='link_L'><li className='nav-link'  >Home</li></Link>
        <Link href={"/Projects"} className='link_L'><li className='nav-link' >Projects</li></Link>
        <Link href={"/Extras"} className='link_L'><li className='nav-link' >Extras</li></Link>
        <Link href={"/About"} className='link_L'><li  className='nav-link'>About</li></Link>
          
        </ul>
      </nav>

  )
}

export default Navbar