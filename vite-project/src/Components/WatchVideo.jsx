import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from "./LiveChat";

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    

    // console.log("Himanshu");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    
  return (
    <div className='watchVideo relative  text-black font-bold bg-white p-0 ml-20 mt-30  flex'>

      <div className='flex flex-col'>
        <iframe width="1000" height="600" className='rounded-2xl'
        src={"https://www.youtube.com/embed/" +searchParams.get("v")}
         title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
           </iframe>

            <CommentsContainer/>
           
      </div>  
      <LiveChat/>


    </div>
  )
}

export default WatchVideo


/* <iframe 
width="560" height="315" 
src="https://www.youtube.com/embed/zdp0zrpKzIE?si=JG7j3iUDHfcfG2P_"
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen></iframe>*/ 