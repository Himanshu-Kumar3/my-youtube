import { useEffect , useState } from "react";
import ChatMesseges from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessege } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { v4 as uuidv4 } from 'uuid'; 

const LiveChat = ()=>{
      const dispatch = useDispatch();
      const chatMesseges = useSelector(store=>store.chat.messege);
      const [liveMessage , setLiveMessage] = useState("")


      useEffect(()=>{
            const t = setInterval(()=>{
                  console.log("API Polling");
                  dispatch(addChatMessege({
                        name:generateRandomName(),
                        message:uuidv4().substring(0,10)+"🎉",
                  }))
            },1500)

            return ()=> clearInterval(t);
      },[])




      return (
        <div>
              <div className=" LiveMessage m-2 mx-6 p-2 border border-black h-130 w-110 rounded-xl bg-slate-50 overflow-y-scroll  flex flex-col-reverse">
                  {/* <ChatMesseges name="Himanshu" message="This is my live page 🎉"/> */}
              
                  {chatMesseges.map((mes , id)=><ChatMesseges key={id} name={mes.name} message={mes.message}/>)}
                  
                 
            </div>
                  <form className=" sendMesage m-0 rounded-lg mx-6 border border-black h-16 w-108" onSubmit={(e)=>{
                        e.preventDefault();
                        dispatch(addChatMessege({
                              name:"Himanshu Kumar",
                              message:liveMessage
                        }))

                        setLiveMessage("")
                  }}>
                        <input className=" liveMessage-Input border border-gray-400 h-12 m-2 p-2 w-80 rounded-lg text-lg font-normal" placeholder="Send Message"  value={liveMessage}
                        onChange={(e)=>{
                               setLiveMessage(e.target.value)
                        }}/>
                        <button className="btn-send bg-green-200 h-14 w-20 text-center text-lg rounded-xl">Send</button>
                  </form>

        </div>
          
    
      )
}
export default LiveChat;