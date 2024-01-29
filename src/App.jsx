import { useState  ,useContext } from "react";
import Btn from "./components/Btn";


const  App = ()=>{
  const[displayValue , setDisplayValue] = useState("");
  const arr = ['%' , 'delete' , 7 , 8 , 9 , 4 , 5 , 6 , 1 , 2 , 3 ,'00' , 0 , '.'];
  
  const done = ()=>{
let temp = "";
for(let i = 0; i < displayValue.length; i++){
  if(displayValue[i] == '+'){
    temp = temp+displayValue[i];
     if(displayValue[i+1] == '0'){
        i++;
     }
  }
  else if(displayValue[i] == '-'){
    temp = temp+displayValue[i];
    if(displayValue[i+1] == '0'){
      i++
    }
  }
  
  else if(displayValue[i] == '*'){
    temp = temp+displayValue[i];
    if(displayValue[i+1] == '0'){
     i++;
    }
  }
  else if(displayValue[i] == '/'){
    temp = temp+displayValue[i];
    if(displayValue[i+1] == '0'){
    i++;
    }
  }
  else if(displayValue[i] == '%'){
    temp = temp+displayValue[i];
    if(displayValue[i+1] == '0'){
     i++;
    }
   
  }
  else{
    temp = temp+displayValue[i];
  }

}
if(!(temp[temp.length-1] >= '0' && temp[temp.length-1] <= '9')){
   temp = temp.slice(0,temp.length-1);
}
 temp = eval(temp);
 const temp2 = temp.toString();
 setDisplayValue(temp2);

console.log("temp" , temp);
    // const ans = eval(displayValue);
    // const ansString = ans.toString();
    // console.log("ansString" , typeof ansString);
    // setDisplayValue(ansString);
  }
  return ( 
    <div>
      <p className="display">{displayValue}</p>
      <div className="lowerbody">
        <div className="btnspace">
          <Btn data = "C" setDisplayValue={()=>{setDisplayValue("")}}/>
          {arr.map((val,idx)=> {return <Btn key ={idx} data = {val} setDisplayValue={()=> val ==="delete"?setDisplayValue(displayValue.slice(0, -1)):setDisplayValue(displayValue+val)}/>})}
         </div>
        <div className="operation">
          <Btn data="/" setDisplayValue={()=> setDisplayValue(displayValue+"/")}/>
          <Btn data="*" setDisplayValue={()=> setDisplayValue(displayValue+"*")}/>
          <Btn data="-" setDisplayValue={()=> setDisplayValue(displayValue+"-")}/>
          <Btn data="+" setDisplayValue={()=> setDisplayValue(displayValue+"+")}/>
          <Btn data="=" setDisplayValue={()=> done()} calculateValue={displayValue}/>
        </div>
      </div>
    </div>

    
  )
}
export default App;