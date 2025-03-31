import React from 'react'
import loader from '/loader.gif'

function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-white'>
        <div>
        <h1 className='w-[70%] text-4xl font-black text-black mb-5'> Loading...</h1>
        <img className='ml-10'  src={loader} alt="" />
        </div>
    </div>
  )
}

export default Loading