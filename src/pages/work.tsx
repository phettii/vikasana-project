import React from 'react'

export default function Work() {

    const workData = [
        {"id": 1, "name": "Student Dashboard", "info": "A platform where students can track their grades, assignments, and class schedules."},
        {"id": 2, "name": "Academic Management Software", "info": "A system to manage student records, course registrations, and academic progress."},
        {"id": 3, "name": "E-commerce Platform", "info": "An online store for businesses to sell products, with features like inventory management and payment processing."},
        {"id": 4, "name": "Project Management Tool", "info": "A tool for teams to collaborate, assign tasks, track progress, and manage deadlines."},
        {"id": 5, "name": "Health Tracking App", "info": "An app that helps users monitor their fitness progress, log workouts, and track nutrition."},
        {"id": 6, "name": "Online Learning Platform", "info": "A platform for students and teachers to connect, offering courses, assignments, and virtual classrooms."},
        {"id": 7, "name": "Social Media App", "info": "A mobile app for users to share updates, photos, and connect with friends and communities."},
        {"id": 8, "name": "Content Management System", "info": "A system for managing and publishing digital content, often used for blogs or corporate websites."},
        {"id": 9, "name": "Banking App", "info": "A mobile app for users to manage their bank accounts, make transfers, and check account balances."}
      ];
      
  return (
<div className='main h-screen w-screen mt-20 px-32'>
<h1 className='text-4xl font-bold text-center '> Our recent Work</h1>
<div className=' mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4'>
  {workData.map((ele) => {
    return (
      <div key={ele.id}>
        <div className='box rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 sm:mx-8 lg:mx-0   lg:rounded-bl-3xl'>
          <div className='text-2xl'>{ele.name}</div>
          <div className='text-smxl'>{ele.info}</div>
        </div>
      </div>

    )
  })}

</div>


</div>
  )
}
