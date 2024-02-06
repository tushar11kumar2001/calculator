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
    <div className=" bg-neutral-400 border-2 border-black w-[30%] p-4 mx-auto my-auto translate-y-1/2 rounded-lg">
      <p className="bg-white w-full h-10 border-2 border-black rounded-lg mb-5 text-end py-2 px-1">{displayValue}</p>
      <div className="lowerbody  mt-5 flex w-full">
        <div className=" flex w-full flex-wrap gap-2.5 justify-between pr-2 item-center ">
          <Btn data = "C" setDisplayValue={()=>{setDisplayValue("")}}/>
          {arr.map((val,idx)=> {return <Btn key ={idx} data = {val} setDisplayValue={()=> val ==="delete"?setDisplayValue(displayValue.slice(0, -1)):setDisplayValue(displayValue+val)}/>})}
         </div>
        <div className=" flex flex-col gap-2.5 justify-center item-center">
          <Btn data={<i class="fa-solid fa-divide"></i>} setDisplayValue={()=> setDisplayValue(displayValue+"/")}/>
          <Btn data={<i class="fa-solid fa-xmark"></i>} setDisplayValue={()=> setDisplayValue(displayValue+"*")}/>
          <Btn data={<i class="fa-solid fa-minus"></i>} setDisplayValue={()=> setDisplayValue(displayValue+"-")}/>
          <Btn data={<i class="fa-solid fa-plus"></i>} setDisplayValue={()=> setDisplayValue(displayValue+"+")}/>
          <Btn data={<i class="fa-solid fa-equals"></i>} setDisplayValue={()=> done()} calculateValue={displayValue}/>
        </div>
      </div>
    </div>

    
  )
}
export default App;