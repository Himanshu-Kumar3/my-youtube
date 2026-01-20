import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResult } from '../utils/searchSlice'
import { YOUTUBE_SEARCH_RESULT_API } from '../utils/constants'
import { Link } from 'react-router'
import SearchVideo from './SearchVideo'
import { setSearchResults } from '../utils/searchVideoSlice'


 const Head = () => {
  const dispatch = useDispatch()

  const [searchText , setSearchText] = useState("");
  const [searchSuggestions , setSearchSuggestions] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);
  const [isSuggestionClicked , setIsSuggestionClicked] = useState(false);

 


  const searchCache = useSelector(store=> store.search.items);

  const onResultClick =(result)=>{
   setSearchText(result);
   setIsSuggestionClicked(true);

   setTimeout(()=>setShowSuggestion(false) , 100)

  }
  

  const handleSearchSubmit =async ()=>{
    console.log("searching for :" , searchText);
     
     const data = await fetch(YOUTUBE_SEARCH_RESULT_API+searchText);
     const json = await data.json();
     console.log(json)

     dispatch(setSearchResults({
      results:json.items,
      query:searchText
     }))
    setShowSuggestion(false);
    setIsSuggestionClicked(false);
   

  }

  const handleKeyPress=(element)=>{
    if(element.key == "Enter"){
      handleSearchSubmit()
    }
  }

  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu())
  }

  const getSearchSuggestions = async ()=>{
   const data = await fetch(YOUTUBE_SEARCH_API + searchText);
   const json = await data.json();
   console.log("API Call -" + json[0])
   setSearchSuggestions(json[1])

   dispatch(cacheResult({
    [searchText] : json[1]
   }))


  }

  useEffect(()=>{
    if(!searchText.trim() || isSuggestionClicked){
      setSearchSuggestions([]);
      setIsSuggestionClicked(false)
      return
    }
   const timer = setTimeout(() => {
    if(searchCache[searchText]){
      setSearchSuggestions(searchCache[searchText]);
    }else{
          getSearchSuggestions();
    }
    
    // console.log(searchText);
    
   }, 200);

   return ()=> clearTimeout(timer);
  } ,[searchText])

  return (
    <div className="Header flex justify-between items-center p-4    shadow-lg fixed top-0 left-0 w-full h-20 z-20 bg-gray-100">
       <div className='Logo flex '>
        <span className='icon h-10 w-10  flex justify-center items-center rounded-full hover:bg-gray-200 hover:rounded-full'>
          <img onClick={toggleMenuHandler} className='h-8 cursor-pointer'  alt="hamburger-icon" src='/hamburger.png' />

        </span>
        <img className='h-9 pt-1 mx-4 w-28'alt="Logo-myYoutube" src='/logo2.webp'/>
       </div>

       <div className="searchContainer  grow-0 z-4 relative  basis-3xl">
        <div className='inputSearch'>
           <input  
           className="search-input border border-gray-400  w-3/4 p-2 pl-4 rounded-l-full"
           type='text' placeholder='Search'
           value={searchText} 
           onChange={(e)=>setSearchText(e.target.value)}
           onFocus={()=>setShowSuggestion(true)}
           onBlur={()=>setShowSuggestion(false)}
           onKeyDown={handleKeyPress}
           />
        
          <Link to="/searchVideo"><button className='search-btn border border-gray-400  p-2 rounded-r-full cursor-pointer bg-gray-200'
          onClick={handleSearchSubmit}>🔍</button></Link>
        </div>

       {showSuggestion && <div className='suggestions absolute top-12 shadow-2xl z-25 rounded-xl left-2 max-h-96 overflow-y-auto scroll-hide w-xl bg-white'>
         <ul>
          {searchSuggestions.map((result)=><Link to="/searchVideo" key={result} ><li className='py-2 px-3 hover:bg-gray-100 m-2 rounded-xl cursor-pointer' 
          
          onClick={()=>onResultClick(result)}
          onMouseDown={(e) => e.preventDefault()}
           >🔍 {result}</li></Link>)}
         </ul>
        </div>
 }

       </div>

       <div className="user ">
        <img className='h-8 mr-4'src="/user-icon.png" alt="user-icon" />
       </div>

    </div>
  )
}
export default Head;