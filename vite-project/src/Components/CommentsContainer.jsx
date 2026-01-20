import CommentList from "./CommentList";

const CommentData = [
   {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[]
   },
     {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[
           {
             name:"Himanshu",
             text:"This is a comment from himanshu",
             replies:[]
            },
            {
              name:"Himanshu",
              text:"This is a comment from himanshu",
              replies:[
                 {
                   name:"Himanshu",
                   text:"This is a comment from himanshu",
                   replies:[]
                 },
                   {
                    name:"Himanshu",
                    text:"This is a comment from himanshu",
                    replies:[]
                   }
              ]
            }
      ]
   },
     {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[]
   },
     {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[]
   },
     {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[]
   },
     {
      name:"Himanshu",
      text:"This is a comment from himanshu",
      replies:[]
   }
]

const CommentsContainer = ()=>{

       return(
            <div className="my-5 p-2 bg-gray-100 rounded-xl">
                  <h2 className="text-2xl">Comments:</h2>
                  <CommentList comments={CommentData}/>
            </div>
      )}




export default CommentsContainer;