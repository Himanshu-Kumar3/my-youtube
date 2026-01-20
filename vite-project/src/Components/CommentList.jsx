import Comment from "./Comment";
const CommentList = (props)=>{
      const {comments} = props

 return(
      // Disclaimer: Don't Use Index as Key
     comments.map((c , idx)=> <div key={idx}>
      <Comment  data={c}/>
        <div className="pl-5 border-l-2 ml-8">
           <CommentList comments={c.replies} />
        </div>
      </div>)
      
 )
}
export default CommentList