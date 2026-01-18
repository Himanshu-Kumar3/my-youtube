// import { useSelector } from "react-redux"; 
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
const Body = ()=>{

    // const selector = useSelector((store)=>store.app.isMenuOpen);
    return(
        <div className="Body flex">
          
            <Sidebar/>
            <MainContainer/>

        </div>
    )
}

export default Body;