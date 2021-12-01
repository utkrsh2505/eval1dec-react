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
    
    return(
        <div>
        <h1>CAR HOUSE</h1>
        <div style={{display:"flex" ,justifyContent:"space-around",flexWrap:"wrap",}}>
       {value.map((item)=>(
           <div style={{width:"500px",margin:"10px",padding:"10px"}} key={item.id}>
               <div>
                   <img src={item.image} style={{width:"250px",height:"300px"}}/>
              
               </div>
               {`Name:${item.name} Type:${item.type}  Price:${item.price}`}
              </div>
       ))}
       </div>
        </div>

    )
}
export default Display;