const ChatMesseges = ({name , message})=>{
      return(
            <div className="flex  items-center m-2 py-1 hover:bg-gray-200 rounded-lg p-2 shadow-md">
                  <img className='h-8 mr-4'src="/user-icon.png" alt="user-icon" />
                  <span className="px-2 text-lg font-semibold">{name}</span>
                  <span className="font-normal text-lg">{message}</span>
            </div>
      )
}
export default ChatMesseges;