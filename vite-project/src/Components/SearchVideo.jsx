
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {clearSearchResult} from "../utils/searchVideoSlice"
import { useNavigate , Link } from "react-router";
import SearchVideoCard from "./SearchVideoCard";
import VideoCard from "./VideoCard";

const SearchVideo = ()=>{
        const dispatch = useDispatch();
        const navigate = useNavigate();

      // const getVideoResult = async()=>{
      //       const data = await fetch(YOUTUBE_SEARCH_RESULT_API);
      //       const json = await data.json()
            
      // }
      const searchResult = useSelector(store=>store.searchvideo.results);
      const searchQuery = useSelector(store=>store.searchvideo.query);

      console.log(searchQuery )
     const filteredResult= searchResult.filter(res=>res?.id?.kind ==="youtube#video")
     console.log(filteredResult)

     
      const backToHome=()=>{
            dispatch(clearSearchResult());
            navigate("/")
      }
      // useEffect(()=>{
      //       getVideoResult()
            
      // } ,[])
      return (
            <div className="m-30 ">
                  <button className="p-2 border border-gray-200 rounded-lg" onClick={backToHome}>Back to Home</button>
                  {filteredResult.map(res=><Link key={res.id.videoId}  to={"/watch?v="+res.id.videoId+"?eid" + res.etag}><SearchVideoCard info={res}/></Link>)}


            </div>
      )
}

export default SearchVideo;