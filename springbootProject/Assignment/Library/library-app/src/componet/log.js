import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
//import { useEffect, useState } from "react";
import data from '../data';
import datastore from './datastore';

const api = axios.create({
  baseURL: "http://localhost:8080",
});
const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

function Log() {
  const [email,setMail]=React.useState("")
  const [pswd,setPswd]=React.useState("")
  const nav = useNavigate()
  // const navigate = useNavigate();
 

    const submitHandlers = async (e) => {
      e.preventDefault()
      console.log(email, pswd);
      let res = await api.post("/api/loging", {email,pswd },config);
      const obj=res.data;
      console.log(res.data);
      console.log("hai");
      let details=obj.type;
      
      if(details==="admin")
      {

        if(localStorage.getItem("AdminInfo")===null)
        {

     
        console.log(obj.id)
        
        localStorage.setItem("AdminInfo",JSON.stringify(obj))
        
        nav("/admin")
        }
      }
      else
      {
if(localStorage.getItem("UserInfo")===null)
{
        console.log(obj.id)
        
        localStorage.setItem("UserInfo",JSON.stringify(obj))
        
        nav("/userhomepage")
      }
    }

     
      
    };



  
     
      
     
    
    
  
 
      
    

  return (
    <div>

<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      
    </div>
    <form className="mt-8 space-y-6" method='GET' >
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email"  require="" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => setMail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password"  required="" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => setPswd(e.target.value)}/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Create an Account  </a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={submitHandlers}>
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">

            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>




      
    </div>
    
  )
}

export default Log