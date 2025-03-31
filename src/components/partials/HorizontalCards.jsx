import React from 'react'
import noimage from '/noimage.jpg'
import {Link} from 'react-router-dom'


function HorizontalCards({ data}) {
    return (
            <div className='w-[100%] flex overflow-y-hidden mb-5 p-5 '>
                {data.length>0 ? data.map((d, i) => <Link to={`/${d.media_type}/details/${d.id}`} key={i}
                    className='min-w-[20%] h-[40vh] bg-zinc-900 mr-5 mb-5 '>
                    <img className='w-full h-[45%] object-cover' src={ d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`:noimage} alt="" />

                    <div className=' text-white p-3 h-[40%] overflow-y-auto'>
                        <h1 className='mt-2 text-xl font-semibold'>{d.name || d.title || d.original_name || d.original_title}</h1>
                        <p className='mt-2'>{d.overview.slice(0, 45)}...<span className='text-zinc-500'> more</span></p>
                    </div>

                </Link>):<h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing to show</h1>}
            </div>
    )
}

export default HorizontalCards