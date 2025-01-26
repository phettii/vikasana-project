export default function Contact() {

  const advantages = [
    {
      "id": 1,
      "name": "Networking Opportunities",
      "info": "Joining a club allows you to connect with like-minded peers, faculty, and alumni, opening doors for future career opportunities, mentorship, and friendships."
    },
    {
      "id": 2,
      "name": "Skill Development",
      "info": "University clubs offer a chance to develop soft skills like leadership, teamwork, and communication, as well as specialized skills depending on the club’s focus."
    },
    {
      "id": 3,
      "name": "Stress Relief",
      "info": "Being part of a club provides a chance to step away from academics, engage in something fun or meaningful, helping to recharge and reduce stress."
    },
    {
      "id": 4,
      "name": "Increased Involvement",
      "info": "Being involved in a club deepens your connection to the campus community and opens doors for personal growth, volunteering, and leadership opportunities."
    }
  ];
  
  return (
    <div className='w-full min-h-screen px-4 sm:px-8 lg:px-32 overflow-hidden flex flex-col items-center'>
      <h1 className='text-4xl mt-10 sm:mt-16 font-bold text-center'>Why wait! Join us Now</h1>

      <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4'>
        {advantages.map((ele) => (
          <div key={ele.id}>
            <div className='box rounded-3xl p-6 ring-1 ring-gray-900/10 bg-black text-white lg:mx-0'>
              <div className='text-xl sm:text-2xl'>{ele.name}</div>
              <div className='text-sm sm:text-lg mt-2'>{ele.info}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full mt-16'>
        <h2 className='text-2xl font-bold text-center'>Please Fill out the form</h2>
        <form className='flex flex-col items-center gap-6 mt-6'>
          <div className='w-full sm:w-96'>
            <label htmlFor="fName" className='block text-sm sm:text-base'>First Name</label>
            <input type="text" placeholder="First Name" id="fName" className="w-full rounded-md border-2 p-2 mt-2"/>
          </div>
          <div className='w-full sm:w-96'>
            <label htmlFor="lName" className='block text-sm sm:text-base'>Last Name</label>
            <input type="text" placeholder="Last Name" id="lName" className="w-full rounded-md border-2 p-2 mt-2"/>
          </div>
          <div className='w-full sm:w-96'>
            <label htmlFor="email" className='block text-sm sm:text-base'>Email</label>
            <input type="email" placeholder="Email" id="email" className="w-full rounded-md border-2 p-2 mt-2"/>
          </div>
          <div className='w-full sm:w-96'>
            <label htmlFor="message" className='block text-sm sm:text-base'>Message</label>
            <input type="text" placeholder="Message" id="message" className="w-full rounded-md border-2 p-2 mt-2"/>
          </div>

          <button className="w-full sm:w-96 rounded-md border-2 p-3 bg-black text-white mt-6">Submit</button>
        </form>
      </div>
    </div>
  )
}
