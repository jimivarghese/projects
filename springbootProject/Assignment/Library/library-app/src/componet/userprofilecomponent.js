import React from 'react'
import Userprofile from './userprofile'
import { useEffect, useState } from "react";

function Userprofilecomponent(props) {

    const [message,setMessage]=useState("")
    const returnbook = event=>
    { 
      
     
/////deleting////

        
         
    let bukid=props.item.bukid;
    fetch(`http://localhost:8080/api/deletebuybook/${bukid}`,{
      method:"DELETE",
      headers:{
        'Content-type':'application/json'
      },
      
      
    })
  
    
    

    .then(res=>res.text())
    .then((result)=>{
      console.log(result)
      alert(result)
      props.refresh()
    })



        }


       

        useEffect(() => {
           const date=new Date(Date.now()).toISOString().substring(0,10);
       
        console.log(date)
        const returndate=`${props.item.returndate}`
        console.log(returndate)

        if(date===returndate)
        {
         setMessage("Return the book")
        }
        console.log(message)

        }, [])
      

  
    
  return (
    


<>
<tr key={props.key}>
 <td> {props.item.bukid}</td> 
 <td>{props.item.bookname}</td> 
 <td> {props.item.author}</td> 
 <td>{props.item.date}</td>
  
  
    <td>{props.item.returndate}</td>

    <td style={{backgroundColor:"green",color:"white"}} ><button onClick={returnbook}>Return</button></td>
    <td style={{border:"0px solid white",color:"red",backgroundColor:"white"}}>{message}</td>
 
    
  </tr>
  
</>


  )
}

export default Userprofilecomponent