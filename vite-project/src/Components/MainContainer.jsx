import ButtonContainer from "./ButtonContainer";
import VideoContainer from "./VideoContainer";
import { useSelector  } from "react-redux";


const MainContainer = ()=>{
    const isMenuOpens = useSelector(store=>store.app.isMenuOpen);
    return(
        <div className= {` mainContainer overflow-hidden relative snap-none ${isMenuOpens ? 'left-66' : 'left-4'}`}>
          <ButtonContainer/>
          <VideoContainer/>
        </div>
    )
}
export default MainContainer;