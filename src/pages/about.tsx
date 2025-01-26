import React from 'react'
import Box from '../components/box'

export default function About() {

  const data = [
    {
      "id": 1,
      "name": "Home Page 1 ",
      "info": "This includes the description of the stuff in the wireframes "
    },
    {
      "id": 2,
      "name": "Home Page 2",
      "info": "This includes the description of the stuff in the wireframes "
    },
    
  ]
 
  return (
    <div className='main w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden'>
      <h1 className='text-4xl font-bold text-center mt-12 sm:mt-56'>About Us</h1>
      <div className='mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {data.map((ele) => {
          return (
            <div key={ele.id} className='flex justify-center'>
              <div className='box rounded-3xl p-6 ring-1 ring-gray-900/10 bg-white/60 sm:p-8 lg:mx-0 lg:rounded-bl-3xl'>
                <div className='text-xl sm:text-2xl'>{ele.name}</div>
                <div className='text-sm sm:text-lg mt-2'>{ele.info}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
