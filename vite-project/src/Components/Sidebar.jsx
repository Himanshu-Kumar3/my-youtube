const Sidebar = ()=>{
    return(
        <div className="sidebar m-2 p-2 w-62 shadow-lg">
            <div className="nav-link border-b border-b-gray-400 pb-2 mb-2 ">
                <ul >
                    <li className="py-2 font-semibold text-xl">Home</li>
                    <li className="py-2 text-xl">Shorts</li>
                </ul>
            </div>
            <div className="subscriptions border-b border-b-gray-400 pb-2 mb-2">
                <h2 className=" head-subs font-semibold text-xl">Subscriptions</h2>
                <ul >
                    
                    <li className="py-2 text-lg">Bio World</li>
                    <li className="py-2 text-lg">Colors TV</li>
                    <li className="py-2 text-lg">Abdul Bari</li>
                    <li className="py-2 text-lg">Aditya Verma</li>
                    <li className="py-2 text-lg">Akshay Saini</li>
                    <li className="py-2 text-lg">ABHINAV PHYSICS</li>

                </ul>
                <h2 className=" show-more text-lg">Show more</h2>
            </div>
            <div className="You border-b border-b-gray-400 pb-2 mb-2">
                <h2 className=" you-heading font-semibold text-xl">You</h2>
                <ul >
                    
                    <li className="py-2 text-lg">History</li>
                    <li className="py-2 text-lg">Playlist</li>
                    <li className="py-2 text-lg">Watch Later</li>
                    <li className="py-2 text-lg">Liked Videos</li>
                    <li className="py-2 text-lg">Your Videos</li>

                </ul>
                <h2 className=" show-more text-lg">Show more</h2>
            </div>
            
        </div>
    )
}

export default Sidebar;
