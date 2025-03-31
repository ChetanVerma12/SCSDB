import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from './partials/Cards';

function TvShows() {
  
    const navigate = useNavigate();
    const[category,setcategory] = useState("airing_today");
    const[tv,settv] = useState([]);
    const[page,setpage] = useState(1);
    const[hasMore, sethasMore] = useState(true);
    document.title ="SCSDB | Tv Shows ";
 
    const GetTV = async()=>{
     try{
         const {data} = await axios.get(`/tv/${category}?page=${page}`);
         // console.log(data);
         //settrending(data.results);
         if(data.results.length>0){
           settv((prevState)=>[...prevState, ...data.results]);
           setpage(page+1);
         }
         else{
            sethasMore(false);
         }
         //console.log(data)
     }
     catch(error){
        console.log("Error:", error);
     }
 };
 
 //console.log(trending)
 
 const refreshHandler =()=>{
      if(tv.length ===0){
         GetTV()
      }else{
         setpage(1)
         settv([]);
         GetTV();
      }
 }
 
 useEffect(()=>{
     refreshHandler();
 },[category]);

  return tv.length>0 ? (
    <div className='w-screen h-screen mt-4'>
       <div className='px-[5%] w-full flex items-center justify-between'>

        <h1 className='text-2xl font-semibold text-zinc-400'>

        <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}Tv Shows<small className='ml-2 text-sm text-zinc-600'>({category})</small>
        </h1>
        <div className='flex items-center w-[80%]'>
        <Topnav/>
        <Dropdown title="Category" options={["on_the_air","popular","top_rated","airing_today"]}  func={(e)=>setcategory(e.target.value)}/>
        </div>
      
       </div>
       <InfiniteScroll dataLength={tv.length} next={GetTV} hasMore={hasMore} loader={<h1>Loading...</h1>}>
       <Cards data={tv} title="tv"/>
       </InfiniteScroll>
    </div>

  ): <Loading/>
}

export default TvShows