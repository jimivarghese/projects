//import React from 'react'
//import loginregister from './loginregister.css';

import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8080",
});
const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
function Loginregister() {

 const [name, setname] = new useState();
  const [dob, setdob] = new useState();
  const [email, setemail] = new useState();
  const [pswd, setpswd] = new useState();
  const [type, settype] = new useState();
  useEffect(() => {
    view();
  }, []);
  const view = async () => {
    let res = await api.get("/api/view");
    console.log(res.data);
  };
  const submitHandlers = async () => {
    console.log(name, dob,email, pswd,type);
    let res = await api.post("/api/insert", {email,pswd,type:"user" }, config);
    console.log(res);
  };
  return (
    

<>
  {/* <title>Slide Navbar</title>
  <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
    rel="stylesheet"
  /> */}
  {/* <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" id="name" name="name" placeholder="User name" required=""  onChange={(e) => setname(e.target.value)}/>
        <input type="date" id="dob" name="dob"  required=""  onChange={(e) => setdob(e.target.value)}/>
        <input type="email" id="email" name="email" placeholder="Email" required="" onChange={(e) => setemail(e.target.value)}/>
        <input type="password" id="pswd" name="pswd" placeholder="Password" required="" onChange={(e) => setpswd(e.target.value)}/>
        <button type="submit" defaultValue="Submit"  onSubmit={submitHandlers}>Sign up</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input type="email"  name="email" placeholder="Email" required="" />
        <input type="password"  name="pswd" placeholder="Password" required="" />
        <button>Login</button>
      </form>
    </div>
  </div> */}




<form onSubmit={submitHandlers}>
          <label htmlFor="fname">First name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="dob">Dob</label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={(e) => setdob(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="dob">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="pswd">Password</label>
          <input
            type="password"
            id="pswd"
            name="pswd"
            onChange={(e) => setpswd(e.target.value)}
          />
          <br />
          <br />

          <button type="submit" defaultValue="Submit" >
            Submit
          </button>
        </form>















</>




    
  )
}

export default Loginregister