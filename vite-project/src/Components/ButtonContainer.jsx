import Button from "./Button";
const ButtonContainer = ()=>{
    const buttons = ["All" ,"Music" ,"JavaScript" , "System design" , "Mixes" ,"WebToons" , "Data Structure", "Study Skills" , "Manhuas" , "APIs"]
    return(
        <div className="ml-4">
            {buttons.map((btn , idx)=><Button key= {idx} name={btn}/>)}
        </div>
    )
}
export default ButtonContainer;