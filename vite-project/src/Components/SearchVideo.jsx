import { useEffect } from "react";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {clearSearchResult} from "../utils/searchVideoSlice"
import { useNavigate } from "react-router";
import VideoCard from "./VideoCard";

const SearchVideo = ()=>{
        const dispatch = useDispatch();
        const navigate = useNavigate();

      const getVideoResult = async()=>{
            const data = await fetch(YOUTUBE_SEARCH_RESULT_API);
            const json = await data.json()
            // console.log(json)
      }
      const searchResult = useSelector(store=>store.searchvideo.results);
      const searchQuery = useSelector(store=>store.searchvideo.query);

      console.log(searchQuery )
     const filteredResult= searchResult.filter(res=>res?.id?.kind ==="youtube#video")
     console.log(filteredResult)

     
      const backToHome=()=>{
            dispatch(clearSearchResult());
            navigate("/")
      }
      useEffect(()=>{
            getVideoResult()
            
      } ,[])
      return (
            <div className="m-30 ">
                  <button className="p-2 border border-gray-200 rounded-lg" onClick={backToHome}>Back to Home</button>
                  <h2>Hey I am Himanshu</h2>
                  {filteredResult.map(res=><SearchVideoCard key={res.id.videoId} info={res}/>)}


            </div>
      )
}

export default SearchVideo;