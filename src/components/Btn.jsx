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
    return <p className="btn" onClick={data ==="="? evaluteValue : data==="delete"? clearDisplay : handleClick}>{data==="delete"?<i className="fa-solid fa-delete-left"></i>:data }</p>;
}
export default Btn;




