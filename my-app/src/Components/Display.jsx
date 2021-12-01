import React from "react";
import { fetchCars } from "./fetchCar";
import { useEffect,useState } from "react";
const Display = ()=>{
    const [value,setValue] = useState([]);
    const [loading,setIsLoading] = useState(false);
    const [error,setIsError] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetchCars()
    .then((res)=>{
       setValue(res.data);
       
    })
    .catch((err)=>{
        setIsError(true)
        console.log("wrong");
    }).
    finally(()=>{
setIsLoading(false)
    })
    },[])

    const handleYear = ()=>{

    }
    
    return(
        <div>
        <h1>CAR HOUSE</h1>
        <button  style={{color:"white", backgroundColor:"black"}} onClick={handleYear}>Sort by Year</button>
        <div style={{display:"flex" ,justifyContent:"center",flexWrap:"wrap"}}>
       {value.map((item)=>(
           <div style={{width:"500px",margin:"10px",padding:"10px"}} key={item.id}>
               <div>
                   <img src={item.image} style={{width:"200px",height:"200px"}}/>
              
               </div>
               {`Name:${item.name} Type:${item.type}  Price:${item.price}`}
               <div><button  style={{color:"white", backgroundColor:"green",margin:"10px",fontSize:"30px",borderRadius:"10px"}}>Buy Now</button></div>
              </div>
       ))}
       </div>
        </div>

    )
}
export default Display;