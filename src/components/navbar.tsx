import React, { useState } from 'react'
import { Link } from 'react-router' // Change to 'react-router-dom' for routing
import { CircleX, TableOfContents } from 'lucide-react';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/about' },
    { id: 3, text: 'Work', to: '/work' },
    { id: 4, text: 'Contact', to: '/Contact' },
    // { id: 5, text: 'Contact', to: '/contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
     
      <div className='logo text-2xl font-bold'>
        Logo
      </div>

      
      <div className='hidden md:flex'>
        <ul className='flex gap-6 items-center'>
          {navItems.map(item => (
            <li key={item.id}>
              <Link to={item.to} className='hover:text-[#00df9a]'>
                {item.text}
              </Link>
            </li>
          ))}
          <button className='p-3 hover:cursor-pointer'>Sign in</button>
          <button className='p-3 hover:cursor-pointer'>Register</button>
        </ul>
      </div>

    
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <CircleX size={20} /> : <TableOfContents size={20} />}
      </div>
 
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
       
        <h1 className='w-full text-3xl font-bold textwhite m-4'>Logo.</h1>

      
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}

      
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'>
          Sign in
        </li>
        <li className='p-4 rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'>
          Register
        </li>
      </ul>
    </div>
  );
}
