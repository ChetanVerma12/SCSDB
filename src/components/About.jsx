import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myimage1 from '/myimage.jpg'

function About() {
  const navigate = useNavigate()

  return (
    <div className='w-screen mx-h-screen px-[10%] '>
         <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl'>
             <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD]     ri-arrow-left-line"></Link>{" "}
        </nav>
    <div className='main'>
          <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-bold text-blue-400">About Us</h1>
          <p className="mt-4 text-gray-300 text-lg">Welcome to SCSDB, your ultimate destination for everything movies! Whether you’re a casual viewer or a dedicated cinephile, we bring you the latest updates, reviews, trailers, and exclusive insights into the world of cinema.</p>
          </section>

          <section className="max-w-4xl mx-auto text-center py-12 px-6">
          <h2 className="text-2xl font-semibold text-blue-300">Our Mission</h2>
          <p className="mt-3 text-gray-400">At SCSDB, our mission is to celebrate the magic of cinema by bringing movie lovers closer to the films they love. We strive to be the ultimate destination for movie enthusiasts by providing:</p>
          <h2 className="text-2xl font-semibold text-blue-300 mt-8">Our Vision</h2>
          <p className="mt-3 text-gray-400">At SCSDB, we envision a world where movies transcend boundaries, inspire creativity, and connect audiences globally. Our goal is to create the most trusted and engaging platform for movie lovers, where cinema is celebrated in all its forms.</p>
         </section>

         <section className="py-12 px-6">
         <h2 className="text-center text-3xl font-bold text-blue-400">Creator</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
         <div className="bg-gray-800 p-6 rounded-lg text-center">
                <img src={myimage1} class="rounded-full mx-auto" alt="Team Member"/>
                <h3 className="mt-4 text-lg font-semibold">Chetan Verma</h3>
                <p className="text-blue-300">CEO & Founder</p>
            </div>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt vel, unde sed, incidunt maxime quod debitis quae quasi in eaque voluptate quos veritatis? Quo harum vero distinctio doloribus similique asperiores illum eveniet facere perferendis obcaecati ex ducimus omnis dignissimos voluptates esse vel consequuntur, ut tempora aperiam eius aliquid temporibus.</p>
        </div>
    </section>

    <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold text-blue-400">Want to Work with Us?</h2>
        <p className="mt-3 text-gray-400">Join us in our journey to build something amazing.</p>
        <Link to="/contactus" href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">Contact Us</Link>
     </section>
    </div>
    </div>
  )
}

export default About