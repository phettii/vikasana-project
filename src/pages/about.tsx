import React from 'react'
import Box from '../components/box'

export default function About() {

  const data = [
    {
      "id": 1,
      "name": "Home Page",
      "info": "This little bit of info is being loaded from a Rails "
    },
    {
      "id": 2,
      "name": "Home Page",
      "info": "This little bit of info is being loaded from a Rails "
    },

  ]
 
  return (
    <div className='main h-500px w-screen px-32 overflow-hidden'>
      <h1 className='text-4xl font-bold text-center '> About Us</h1>
      <div className=' mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <div className='box rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 sm:mx-8 lg:mx-0   lg:rounded-bl-3xl'>
                <div className='text-2xl'>{ele.name}</div>
                <div className='text-2xl'>{ele.info}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
