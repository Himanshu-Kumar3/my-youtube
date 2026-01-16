import Button from "./Button";
const ButtonContainer = ()=>{
    const buttons = ["All" ,"Music" ,"JavaScript" , "System design" , "Mixes" ,"WebToons" , "Data Structure"]
    return(
        <div>
            {buttons.map((btn)=><Button name={btn}/>)}
        </div>
    )
}
export default ButtonContainer;