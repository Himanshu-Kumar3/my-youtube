import { useSelector } from "react-redux"; 
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom"
const Body = ()=>{

    const isMenuOpens = useSelector((store)=>store.app.isMenuOpen);
    return(
        <div className="Body flex overflow-hidden  relative h-full w-full top-24  snap-none">
            <div className="sidebarWrpper h-full shrink-0  overflow-y-auto fixed bg-white z-4 top-20  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
                 {isMenuOpens && <Sidebar/>}
            </div>

        <Outlet/>

        </div>
    )
}

export default Body;