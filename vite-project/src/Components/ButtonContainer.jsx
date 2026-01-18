import Button from "./Button";
const ButtonContainer = ()=>{
    const buttons = ["All" ,"Music" ,"JavaScript" , "System design" , "Mixes" ,"WebToons" , "Data Structure", "Study Skills" , "Manhuas" , "APIs"]
    return(
        <div className="m-0  shrink-0 fixed top-20  p-4 flex  h-20 z-4 items-center bg-white w-full ">
            {buttons.map((btn , idx)=><Button key= {idx} name={btn}/>)}
        </div>
    )
}
export default ButtonContainer;