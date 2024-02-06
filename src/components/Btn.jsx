const Btn = ({data , setDisplayValue})=>{
    const clearDisplay = ()=>{
      setDisplayValue();
    }

    const evaluteValue = () =>{
   setDisplayValue();
     }

    const handleClick = ()=>{
        setDisplayValue();
    }
    return <p className="btn border-2 border-black bg-slate-300 rounded-lg py-2.5 px-5 text-center cursor-pointer w-24" onClick={data ==="="? evaluteValue : data==="delete"? clearDisplay : handleClick}>{data==="delete"?<i className="fa-solid fa-delete-left"></i>:data }</p>;
}
export default Btn;




