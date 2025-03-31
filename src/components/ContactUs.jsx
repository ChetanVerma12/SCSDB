import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ContactUs() {
  const navigate =  useNavigate()
  return (
    <div className='w-screen h-screen px-[10%]'>
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl'>
        <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD]     ri-arrow-left-line"></Link>{" "}
     </nav>
     <div className='w-[100%] h-[90%] flex'>
        <div className='bg-red-100 w-[600px] h-[95%] rounded-tl-md rounded-bl-md overflow-hidden'>
            <img className='h-full w-full   ' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2F3MWZxdzAxeWQ2aXF2emx6YWZ5YnZoY3h1eHhlZ2VvbjF4ZjAxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPku6fonFMEY2aI/giphy.gif" alt=""  />
        </div>
        <div className='bg-[#D1D5DB] w-[600px] h-[95%] rounded-tr-md rounded-br-md '>
           <h1 className='mt-5 ml-[33%] w-[70%] text-4xl font-black text-black '>Contact Us</h1>
           <div className='w-full h-[90%] flex justify-center items-center '>
          
             <form>
              <label>Name</label>
              <input className='bg-white px-3 py-2 mb-5 w-full rounded-md outline-none' type="text" placeholder='enter your full name'/>
              <br />
              <label>Email</label>
              <input className='bg-white px-3 py-2 mb-5 w-full rounded-md outline-none' type="text" placeholder='enter your email' />
              <br />
              <label>Phone Number</label>
              <input className='bg-white px-3 py-2 mb-5 w-full rounded-md outline-none' type="text" placeholder='enter your phone number' />
             <br />
             <label>Subject</label>
             <input className='bg-white px-3 py-2 mb-5 w-full rounded-md outline-none' type="text" placeholder='enter your subject' />
             <br />
             <textarea className='bg-white px-3 py-2 mb-5 w-full rounded-md outline-none' rows={2} placeholder='enter your message'></textarea>
             <br />
             <input className='bg-[#6556cd] ml-[38%] px-3 py-2 mb-5  rounded-md' type="submit" />
             </form>
           </div>
        </div>
     </div>
    </div>
  )
}

export default ContactUs