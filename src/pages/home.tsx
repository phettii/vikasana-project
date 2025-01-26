import React from 'react'
import About from './about'

export default function Home() {
  return (
    <div className='main mt-10 h-screen w-screen flex items-center justify-evenly flex-col sm:flex-col'>
   
      <div className='mt-40 p-6 rounded-xl hero max-w-[600px] mx-auto bg-[#f5f5f5]'>
        <div className='text-4xl p-2 text-center font-bold'>
          Coding Redefined
        </div>
        <div className='text-3xl p-2 text-center'>
          Welcome to the club where code is all about understanding
        </div>
      </div>

       
      <div className='mt-8'>
        <img src="lang.jpg" alt="Funny Programming Image" className='h-96 mx-auto rounded-lg shadow-lg' />
      </div>
    </div>
  )
}
