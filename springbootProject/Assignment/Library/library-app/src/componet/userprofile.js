import React from 'react'
import datastore from './datastore'
import userprofile from './userprofile.css'
import { useEffect, useState } from "react";
import Userprofilecomponent from './userprofilecomponent';
import { useNavigate } from 'react-router-dom';

function Userprofile() {

const navigate=useNavigate();
  const[data,setData]=useState()




    let userInfo=localStorage.getItem("UserInfo");
    userInfo=JSON.parse(userInfo);
    console.log(userInfo.id)
    let userid=userInfo.id



    useEffect(() => {
      fetchData()
  }, [])


  // 
 
  
  const fetchData = () => {
    fetch(`http://localhost:8080/api/getuserbook/${userid}`)
        .then((res) =>
            res.json())

        .then((result) => {
            console.log(result);
             setData(()=> result.map((item,index) => {
              console.log(item)
              return <Userprofilecomponent item={item} key={index} refresh={refresh} />
             
            }))
            
        })






      }
      function logout()
      {

localStorage.clear(userInfo)

navigate('/log');

      }




      function refresh()
      {



        fetch(`http://localhost:8080/api/getuserbook/${userid}`)
        .then((res) =>
            res.json())

        .then((result) => {
            console.log(result);
             setData(()=> result.map((item,index) => {
              console.log(item)
              return <Userprofilecomponent item={item} key={index} refresh={refresh} />
             
            }))
            
        })
      }


  return (
   





<div className="flex items-center justify-center min-h-screen bg-white">
  <div className="col-span-12">
    <div className="overflow-auto lg:overflow-visible">
      <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 className="text-2xl text-gray-500 font-bold"> User</h2>
        
        <div>
         
          <a href="/userhomepage">
            <button 
              className="
          bg-blue-500
          hover:bg-blue-700
          text-white
          py-1
          px-3
          sm
          rounded-full
        "
        
            >
              Profile
            </button >
          </a>
          <a href="#">
            <button
              className="
          bg-blue-500
          hover:bg-blue-700
          text-white
          py-1
          px-3
          sm
          rounded-full
        "
        onClick={logout}
            >
              Log Out
            </button>
          </a>
        </div>
      </div>
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Book id</th>
            <th className="p-3 text-left">Book name</th>
            <th className="p-3 text-left">Author</th>
            <th className="p-3 text-left">Date of purchase</th>
            <th className="p-3 text-left">Date of return</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  </div>
</div>














  )}

export default Userprofile