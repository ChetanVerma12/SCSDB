import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({data}) {

  return (
    <div style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='w-full h-[50vh] flex flex-col justify-end items-start p-[3%]' >
        <h1 className='w-[70%] text-4xl font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>
        <p className='w-[70%] mt-3 text-white'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'> more</Link></p>
        <p className='text-white mt-2'>
        <i className="text-yellow-500 ri-megaphone-fill"></i>{data.first_air_date ||data.release_date
        }
        <i className="ml-5 text-yellow-500  ri-album-fill"></i>{data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`}  className='mt-5 bg-[#6556cd] p-4 rounded text-white font-semibold'>Watch Trailer</Link>
    </div>
  )
}

export default Header