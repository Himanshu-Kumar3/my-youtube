import { useEffect  , useState} from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = ()=>{
    const [videoInfo , setVideoInfo] = useState([]);
    
    const getVideoData = async ()=>{
         const data = await fetch(YOUTUBE_VIDEO_API);
         const json = await data.json();
         console.log(json);
         setVideoInfo(json.items);

    }
    useEffect(()=>{
        getVideoData();
    },[]);

  

    return(
        <div className="videoCard-container flex flex-wrap p-2 m-2">
           {videoInfo.map((info)=><VideoCard key={info.id}info={info}/>)}
        </div>
    )
}
export default VideoContainer