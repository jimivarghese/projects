import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import datastore from './datastore';
import adminpage from './adminpage.css'

function Bookmap(props) {
    const navigate=useNavigate();
    function  update(){
   
        
       
        localStorage.setItem('UpdateBook',JSON.stringify(props.item));
        
      
         navigate('/updatepage');
         
    }
     
    function deletebook(){
        
         
          let id=props.item.id;
          fetch(`http://localhost:8080/api/deletebook/${props.item.id}`,{
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

  return (
  
    

    <tr key={props.key}>
    <td>{props.item.id}</td>
                         <td>{props.item.bookname}</td>
                         <td>{props.item.author}</td>
                      <td>{props.item.totalcopy}</td>
                    <td>{props.item.avilablecopy}</td>
                        <td>
                           {/* <Link to={{pathname:'/update/${item.id}'}}>
                           Edit
                          </Link> */}
                           <button style={{'backgroundColor':"yellow"}} onClick={update} >Edit</button>
                         </td>
                       <td><button style={{'backgroundColor':"yellow"}} onClick={deletebook}>Delete</button></td>
                   
  </tr>
               
 
  )
}

export default Bookmap