import React from 'react'
import About from './about'

export default function Home() {
  return (
    <div className='main mt-10 h-screen w-screen flex items-center overflow-none justify-evenly'>
      <div className='mt-10 p-4 rounded-xl m-10 hero w-2xl h-72 '>
        <div className='text-4xl p-2'>Coding Redifined</div>
        <div className='text-4xl p-2'>Welcome to the club
          wheer code is about understanding
        </div>
      </div>

      <div>
        <img src="lang.jpg" alt="Funny Programming Image" className='h-96' />
      </div>
    </div>
  )
}
