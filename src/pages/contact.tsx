 

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
    <div>

      <h1 className='text-4xl mt-20 font-bold text-center '>Why wait ! Join us Now</h1>
    {/* <div className='main mt-20 h-[1300px] w-[1000px] px-32 overflow-hidden flex'> */}
    <div className='main mt-20 h-screen w-screen px-32 overflow-hidden flex items-center'>
      <div className=' mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {advantages.map((ele) => {
          return (
            <div  key={ele.id}>
              <div className='box rounded-3xl p-8  ring-1 ring-gray-900/10 sm:p-10 bg-black text-white sm:mx-8 lg:mx-0   lg:rounded-bl-3xl'>
                <div className='text-xl'>{ele.name}</div>
                <div className='text-xl'>{ele.info}</div>
              </div>
            </div>
          )
        })}
      </div>
        <div className="form w-750px h-850px px-28  ">
          <h1 className="text-2xl font-bold">Please Fill out the form</h1>
            <form className="flex flex-col justify-center items-center gap-6 items-center col-span-3 mt-6">
            <label htmlFor="fName">First Name  </label>

               <input type="text" placeholder="First Name" id="fName" className=" rounded-md border-2 p-2"/>
               <label htmlFor="Last Name">Last Name  </label>

               <input type="text" placeholder="Last Name" id="lName" className=" rounded-md border-2 p-2"/>
               <label htmlFor="email">Email </label>

               <input type="email" placeholder="Email"  id="email" className=" rounded-md border-2 p-2"/>
               <label htmlFor="message">Message  </label>

               <input type="text" placeholder="Message" id="message" className=" rounded-md border-2 p-2"/>

               <button className=" rounded-md border-2 p-2 bg-black text-white" >Submit</button>
            </form>
      </div>
      
    </div>
        </div>
  )
}
