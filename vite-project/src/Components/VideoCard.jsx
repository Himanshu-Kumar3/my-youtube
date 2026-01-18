
const VideoCard = (props)=>{
   
   const {info} = props;
   console.log(info);
   
   
    return(
        <div className="videoCard m-0  p-4 py-4 h-96 w-[456px] mx-2 hover:drop-shadow-xl hover:bg-amber-100 hover:rounded-xl  hover:transition-all duration-300">
            <img className="w-md h-64 rounded-xl" alt="thumbnail" src={info?.snippet?.thumbnails?.high?.url}/>
            <div className="cardInfo flex items-center justify-between mt-4 font-semibold cursor-default">
                <img className="profile h-10" alt="profile" src="/user-icon.png"/>
                <h2 className="title mx-2 line-clamp-2 w-4/5">{info?.snippet?.title}</h2>
                <button className="h-8 w-8" ><img className="h-8" alt="card-dot" src="/card-dot.png"/></button>
            </div>
            <a className="pl-12 text-md text-gray-600 font-medium cursor-pointer hover:text-black">{info?.snippet?.channelTitle}</a>
            <p className="pl-12 text-md text-gray-600 font-medium cursor-pointer">{info?.statistics?.viewCount > 1000 ? info?.statistics?.viewCount /1000 + "k" : info?.statistics?.viewCount } </p>
        </div>
    )
}
export default VideoCard;