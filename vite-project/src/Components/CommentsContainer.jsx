
import Comment from "./Comment";


 const CommentLists = (comments)=> {comments.map(d=><Comment  data={d}/>)} 
    

 const commentList  = [{
      name: "Jatin",
      comment :"This is my Comment",
      replies :[
            {
            
            name: "Jatin",
            comment :"This is my Comment",
            replies :[
                  {
            
                name: "Jatin",
                comment :"This is my Comment",
                replies :[
                  {
            
                      name: "Jatin",
                      comment :"This is my Comment",
                      replies :[{}],
   
                    }],
   
            }],
   
        },
        {
            
         name: "Jatin",
          comment :"This is my Comment",
          replies :[{}],
   
        },
        {
            
          name: "Jatin",
          comment :"This is my Comment",
          replies :[{}],
   
         },
         {
            
            name: "Jatin",
            comment :"This is my Comment",
            replies :[{}],
   
         }
     ],
   },
    {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
   {
      name: "Jatin",
      comment :"This is my Comment",
      replies :[{}],
   },
]

const CommentsContainer = ()=>{

       return(
            <div className="my-5 p-2">
                  <h2 className="text-2xl">Comments:</h2>
                  <CommentLists comments={commentList}/>
            </div>
      )}




export default CommentsContainer;