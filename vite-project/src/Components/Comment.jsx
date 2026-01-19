
const Comment = (props)=>{
      const {data} = props;
      //  const {name ,comment ,replies} = data;


 return(
      <div className="comment flex m-4 p-2 hover:bg-gray-100">
            <div className="user-icon">
                   <img  className="userImg h-8 mr-2 pr-2" src="/user-icon.png" alt="comment-icon"/>
            </div>
            <div className="user  ">
                <p className="text-md font-semibold">@{name}</p>
                <p className="comment text-lg font-normal">{comment}</p>
            </div>
            
        
         
      </div>
 )
}
export default Comment;