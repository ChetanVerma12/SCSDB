import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';
import { removeperson } from '../store/reducers/personSlice';
import { asyncloadperson } from '../store/actions/personActions';
import Dropdown from '../components/partials/Dropdown'

function PersonDetails() {
  const {pathname} = useLocation();
  const navigate = useNavigate()
  const {id} = useParams() 
  const {info} = useSelector(state=>state.person)
  const dispatch = useDispatch();
  const[category,setcategory] = useState("movie")
  console.log(info);
  useEffect(()=>{
      dispatch(asyncloadperson(id))
      return ()=>{
         dispatch(removeperson())
      }
  },[id])

  return info ? (
    <div className='px-[10%] w-screen h-[175vh] bg-[#1F1E24] overflow-y-hidden'>
      {/* part-1 */}
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl'>
             <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD]     ri-arrow-left-line"></Link>{" "}
      </nav>

      {/* part-2 */}
      <div className='w-full flex '>
        {/* part-2 A-left Poster & Details */}
         <div className='w-[23%]'>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[80%] h-[40vh]  object-cover' src={`https://image.tmdb.org/t/p/original/${  info.detail.profile_path}`} alt="" />
            <hr className='mt-5 mb-3 border-none h-[2px] bg-zinc-500 w-[80%]' />
            {/*links */}
            <div className='text-xl text-white flex gap-x-4'>
               <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
               <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
               <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-line"></i></a>
               <a target="_blank" href={`https://x.com/${info.externalid.twitter_id}`}> <i className="ri-twitter-x-fill"></i></a>

            </div>
            {/*personal informations */}
            <h1 className='text-2xl text-zinc-300 font-semibold my-3'>Person Info</h1>
            <h1 className='text-lg text-zinc-300 font-semibold'>Know For</h1>
            <h1 className='text-zinc-300 '>{info.detail.known_for_department}</h1>

            <h1 className='text-lg text-zinc-300 font-semibold mt-3'>Gender</h1>
            <h1 className='text-zinc-300 '>{info.detail.gender === 2 ? "Male":"Female"}</h1>

            {info.detail.birthday ? <h1 className='text-lg text-zinc-300 font-semibold mt-3'>B.O.D</h1>:''}
            <h1 className='text-zinc-300 '>{info.detail.birthday}</h1>

            { info.detail.deathday ?<h1 className='text-lg text-zinc-300 font-semibold mt-3'>Death</h1>:''}
            <h1 className='text-zinc-300 '>{info.detail.deathday}</h1>
             
            {info.detail.place_of_birth? <h1 className='text-lg text-zinc-300 font-semibold mt-3'>Place_of_birth</h1>:''}
            <h1 className='text-zinc-300 '>{info.detail.place_of_birth}</h1>

            {info.detail.also_known_as.join(', ')? <h1 className='text-lg text-zinc-300 font-semibold mt-3'>Also_known_as</h1>:''}
            <h1 className='text-zinc-300 '>{info.detail.also_known_as.join(", ")}</h1>

         </div>
         {/* part-2 B-right details & info */}
         <div className='w-[80%] ml-5'>
            <h1 className='text-6xl text-zinc-400 font-black my-3'>{info.detail.name}</h1>
            {info.detail.biography? <h1 className='text-xl text-zinc-400 font-semibold'>Biography</h1>:''}
            <p className='text-zinc-400 mt-3'>{info.detail.biography.slice(0,900)}</p>

           {info.combinedCredits.cast? <h1 className='mt-5 text-lg text-zinc-400 font-semibold'>Movies & Shows</h1>:''}
            <HorizontalCards data={info.combinedCredits.cast}/>
            <div className='w-full flex justify-between'>
              <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>Acting</h1>
              <Dropdown title="category" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)} />
            </div>
            <div className='list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
              {info[category + "Credits"].cast.map((c,i)=>(
                <li key={i} className='hover:text-white duration-300 cursor-pointer p-5'>
                <Link to={`/${category}/details/${c.id}`} >
                  <span>{" "}{c.name || c.title || c.original_name || c.original_title}</span>
                  <span className='ml-5 block mt-2'>{c.character && `Character Name: ${c.character}`}</span>
                </Link>
              </li>
              ))}
              
            </div>
         </div>
      </div>
    </div>
  ):<Loading/>
}

export default PersonDetails