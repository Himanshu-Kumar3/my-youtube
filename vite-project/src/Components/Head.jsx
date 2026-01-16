import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
 const Head = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu())
  }


  return (
    <div className="Header flex justify-between items-center p-2 m-2 mx-2 shadow-lg">
       <div className='Logo flex '>
        <span className='icon h-10 w-10  flex justify-center items-center rounded-full hover:bg-gray-200 hover:rounded-full'>
          <img onClick={toggleMenuHandler} className='h-8 cursor-pointer'  alt="hamburger-icon" src='/hamburger.png' />

        </span>
        <img className='h-8 mx-4'alt="Logo-myYoutube" src='/logo-youtube.webp'/>
       </div>

       <div className="searchContainer   grow-0 shrink basis-3xl">
        <input type='text' placeholder='Search' className="search-input border border-gray-400  w-3/4 p-2 pl-4 rounded-l-full"/>
        <button className='search-btn border border-gray-400  p-2 rounded-r-full cursor-pointer bg-gray-200'>Search</button>
       </div>

       <div className="user ">
        <img className='h-8 mr-4'src="/user-icon.png" alt="user-icon" />
       </div>

    </div>
  )
}
export default Head;