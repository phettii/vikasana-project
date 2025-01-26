import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
    return (
        <div className='nav w-screen text-smxl h-16 border-b flex items-center justify-evenly'>
            <div className='logo '>Logo</div>
            <div className='nav-links '>
                <ul className='m-4 gap-3 flex items-center'>
                    <li className=''>
                        <Link to="Home">Home</Link>
                    </li>
                    <Link to="About">About</Link>
                    <Link to="Contact">Contact</Link>
                    <button className='p-3 hover:cursor-pointer' >Sign in </button>
                    <button className='p-3 hover:cursor-pointer'>Register </button>
                </ul>
            </div>
        </div>
    )
}
