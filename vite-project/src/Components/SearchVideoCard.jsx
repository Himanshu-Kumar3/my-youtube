const SearchVideoCard = (props)=>{
    const {info} = props;
//     console.log(info)
      return (
            <div className=" searchVideoCard flex flex-wrap m-auto  mb-8 rounded-xl p-2 h-68 w-3xl bg-gray-100">
               <div className="w-2/6 ">
                  <img className="videoImage mr-4 rounded-2xl h-60 w-full " src={info?.snippet?.thumbnails?.high?.url} alt="Video-Image"/>
               </div>
               <div className="flex flex-col justify-between w-3/5 pl-2 ml-4">
                  <div className="header flex justify-between  relative h-10 pt-2" >
                      <h2 className="text-xl font-semibold w-4/5 hover:text-blue-500">{info?.snippet?.title}</h2>
                      <button className=" w-2/12 absolute right-0 h-10 " ><img className="h-10  " src="/card-dot.png" alt="threeDot" /></button>
                  </div>
                  <p className="text-lg relative bottom-10">{info?.snippet?.description}</p>
                  
               </div>
            </div>
      )
}

export default SearchVideoCard;