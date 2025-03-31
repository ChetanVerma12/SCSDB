import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';

function Home() {
  document.title = "SCSDB | HomePage";
  const[wallpepar, setwallpepar] = useState(null);
  const[trending,settrending] = useState(null);
  const[category,setcategory] = useState("all");

  const GetHeaderWallpepar = async()=>{
      try{
          const {data} = await axios.get(`/trending/all/day`);
          let randomdata = data.results[(Math.random()*data.results.length +1).toFixed()];
          setwallpepar(randomdata);
      }
      catch(error){
         console.log("Error:", error);
      }
  };


  const GetTrending = async()=>{
    try{
        const {data} = await axios.get(`/trending/${category}/day`);
        settrending(data.results);
    }
    catch(error){
       console.log("Error:", error);
    }
};


  useEffect(()=>{
     GetTrending();
     !wallpepar && GetHeaderWallpepar();
  },[category])
  console.log(trending);
  return wallpepar && trending ? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full '>
    <Topnav/>
    <Header data={wallpepar}/>
    <div className='p-5 flex justify-between'>
        <h1 className='text-3xl font-semibold text-zinc-400'>
          Trending
        </h1>
      <Dropdown title="Filter" options={["tv","movie", "all"]} func={(e)=>setcategory(e.target.value)}/>
    </div>
    <HorizontalCards data={trending}/>
    </div>
    </>
  ):<Loading/>
}

export default Home