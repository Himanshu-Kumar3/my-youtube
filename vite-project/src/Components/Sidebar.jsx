import { useSelector } from "react-redux";
import { Link } from "react-router";
const Sidebar = ()=>{
    const isMenuOpens = useSelector(store=> store.app.isMenuOpen)
     const moveToHome = ()=>{
        
     }

    if (!isMenuOpens) return null;

    return(
        <div className="sidebar m-2 p-2 w-56 shadow-lg shrink-0 h-full   ">
            <div className="nav-link border-b border-b-gray-400 pb-2 mb-2 w-full ">
                <ul >
                   <Link to="/"><li className="py-2  font-semibold text-xl cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl" onClick={moveToHome}>Home</li></Link> 
                    <li className="py-2 text-xl cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Shorts</li>
                </ul>
            </div>
            <div className="subscriptions border-b border-b-gray-400 pb-2 mb-2">
                <h2 className=" head-subs font-semibold text-xl cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Subscriptions</h2>
                <ul >
                    
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Bio World</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Colors TV</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Abdul Bari</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Aditya Verma</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Akshay Saini</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">ABHINAV PHYSICS</li>

                </ul>
                <h2 className=" show-more text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Show more</h2>
            </div>
            <div className="You border-b border-b-gray-400 pb-2 mb-2">
                <h2 className=" you-heading font-semibold text-xl cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">You</h2>
                <ul >
                    
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">History</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Playlist</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Watch Later</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Liked Videos</li>
                    <li className="py-2 text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Your Videos</li>
                    <li className=" show-more text-lg cursor-pointer hover:bg-gray-200 px-2 hover:rounded-xl">Show more</li>

                </ul>
                
            </div>
            
        </div>
    )
}

export default Sidebar;
