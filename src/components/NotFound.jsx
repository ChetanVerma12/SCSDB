import React from 'react'
import Notfound from '/Error.gif'

function NotFound() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className='h-[50%] object-cover'  src={Notfound} alt="" />
    </div>
  )
}

export default NotFound