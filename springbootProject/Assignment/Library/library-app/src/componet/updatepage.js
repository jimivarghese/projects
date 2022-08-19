import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import datastore from './datastore'

function Updatepage() {
  let updateBook=localStorage.getItem("UpdateBook")
  updateBook=JSON.parse(updateBook)
  console.log(updateBook)
  const navigate=useNavigate();
    const[id,setid]=useState(updateBook.id)
    const[bookname,setBookname]=useState(updateBook.bookname)
    const[author,setAuthor]=useState(updateBook.author)
    const[totalcopy,setTotalcopy]=useState(updateBook.totalcopy)
    const[avilablecopy,setAvilablecopy]=useState(updateBook.avilablecopy)


     
    function bookchange(e){
        e.preventDefault()
         
          let settle={id,bookname,author,totalcopy,avilablecopy}
          fetch(`http://localhost:8080/update/${id}`,{
            method:"PUT",
            headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify(settle)
          })
          localStorage.removeItem("UpdateBook")
          navigate("/admin")
          
          
        }
  return (
    <div>
       
         {/* component */}
  <div className="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
    <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
      
      <div className="flex justify-center">
        <div className="flex">
          <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
            Book Add Here..
          </h1>
        </div>
      </div>
      

      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Book Name
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          placeholder="Type Book Name..."
           value={ bookname}
          onChange={(e) => setBookname(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Author
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          placeholder="Type Author Name..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Total Copy
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Total Copy..."
            value={totalcopy}
            onChange={(e) => {setTotalcopy(e.target.value>=10 ? 10 : e.target.value )}}
          />
        </div>
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Available copy
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            value={avilablecopy}
            placeholder=" Available copy"
            onChange={(e) => {setAvilablecopy(e.target.value>totalcopy ? totalcopy: e.target.value )}}
           
          />
        </div>
      </div>
      




      
     
      <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
        <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2" onClick={bookchange}>
        Update
        </button>
       
      </div>
    </div>
  </div>


        










    </div>
  )
}

export default Updatepage