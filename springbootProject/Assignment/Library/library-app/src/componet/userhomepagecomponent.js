import React from 'react'
import { useEffect, useState } from "react";

function Userhomepagecomponent(props) {
  const[id,setId]=new useState(props.item.id)
    const[bookname,setBookname]=new useState(props.item.bookname)
    const[author,setAuthor]=new useState(props.item.author)
    const[totalcopy,setTotalcopy]=new useState(props.item.totalcopy)
    const[avilablecopy,setAvilablecopy]=new useState(props.item.avilablecopy)
    const[counter, setCounter]=new useState(props.item.avilablecopy)
    const [disable, setDisable] = React.useState(false);

   
  const handleClick= event=>
  { 
/////////////////////////////User limit cheching to buy book
let userInfo=localStorage.getItem("UserInfo");
userInfo=JSON.parse(userInfo);
console.log(userInfo.id)
let userid=userInfo.id



fetch(`http://localhost:8080/api/getuserbooklimit/${userid}`)
        .then((res) =>
            res.text())

        .then((result) => {
          console.log("LIMIT RESULT")
            console.log(result);
            
            if(result==="valid")
            {
              

//////////////////////////////

    let m=avilablecopy
 
 
   
   let settle={bookname,author,totalcopy,avilablecopy}
    
if(avilablecopy!="0")
{
  fetch(`http://localhost:8080/bookbuyupdate/${id}`,{
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(settle)
    })

    .then((res) =>
            res.text())

        .then((response) => {

          alert('Book purchased')
          props.fetchData() 

        })

///////////////
//BUY


let userInfo=localStorage.getItem("UserInfo");
userInfo=JSON.parse(userInfo);
let a=userInfo.id;

console.log(props.item.id)


const date=new Date(Date.now()).toISOString().substring(0,10);
const nextdate=new Date(Date.now()+12096e5);

console.log(date)
const returndate=nextdate.toISOString().substring(0,10)
console.log(returndate)


let userid=a
let bukid=props.item.id;
const user={userid,bukid,bookname,author,date,returndate}
fetch("http://localhost:8080/api/buybookinsert",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(user)
		  }).then(() => {
			
			
		  })



//////////////////////////////////











}
if(avilablecopy==="0")
{
  alert("No Books are Avilable")
}

            }

            if(result==="null")
            {
              alert("limit exceed")
            }
        })


  }



    let d
  function update(book)
  {
    d=book.id
    
    console.log("Haiiii")
    console.log(d)
    setBookname(book.bookname)
    setAuthor(book.author)
    setTotalcopy(book.totalcopy)
    setAvilablecopy(book.avilablecopy)
     setAvilablecopy(avilablecopy-1)



  }
  
  return (
   
   


<tr  key={props.key}>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-l border-[#E8E8E8]
                     "
                  >
                    {props.item.id}
                  </td>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-white
                     border-b border-[#E8E8E8]
                     "
                  >
                   {props.item.bookname}
                  </td>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-[#E8E8E8]
                     "
                  >
                   {props.item.author}
                  </td>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-white
                     border-b border-[#E8E8E8]
                     "
                  >
                   {props.item.totalcopy}
                  </td>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-[#E8E8E8]
                     "
                    
                  >
                    {props.item.avilablecopy}
                  </td>
                  <td
                    className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-white
                     border-b border-r border-[#E8E8E8]
                     "
                  >
                    <button
                      href="javascript:void(0)"
                      className="
                        border border-primary
                        py-2
                        px-6
                        text-primary
                        inline-block
                        rounded
                        hover:bg-primary hover:text-white
                        " disabled={disable}
                        onClick={()=>{handleClick();setDisable(true)}}
                    >
                    BUY
                    </button>
                  </td>
                </tr>
                









   
  )
}

export default Userhomepagecomponent