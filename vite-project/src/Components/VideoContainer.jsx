import { useEffect  , useState} from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
    const [videoInfo , setVideoInfo] = useState([]);
    
    const getVideoData = async ()=>{
         const data = await fetch(YOUTUBE_VIDEO_API);
         const json = await data.json();
        //  console.log(json.items);
         setVideoInfo(json.items);

    }
    useEffect(()=>{
        getVideoData();
    },[]);

  

    return(
        <div className="videoCard-container  relative top-16 flex flex-wrap p-2  overflow-y-auto z-1">
           {videoInfo.map((info)=><Link to={"/watch?v=" + info.id + "?eid" + info.etag} key={info.id}><VideoCard info={info}/></Link>)}
        </div>
    )
}
export default VideoContainer