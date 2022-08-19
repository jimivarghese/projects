import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";


function Register() {


    const [id,setId]=React.useState("")
    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [dob,setDob]=React.useState("")
    const [pswd,setPswd]=React.useState("")
	 const [conformpswd,setConformpswd]=React.useState("")
    const[users,setUsers]=React.useState()
	const[type,setType]=React.useState("")
	const navigate = useNavigate();
    
	const[Val,setVal]= React.useState("Email Required")
	function ValidateEmail(inputText)
    {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat))
    {
    setVal("");
    return true;
    }
    else
   {
    setVal("You have entered an invalid email address!");
    return false;
    }
    }



	function checkemail(){
		fetch(`http://localhost:8080/checkemail/${email}`)
		.then(res=>res.text())
			   .then((result)=>{console.log(result);
				if (result===null){ValidateEmail()}
				if (result==="This email is already registered"){setVal(result)}
			  })
	   }



	function handleclick(e){
		e.preventDefault()
	
		
	  if(Val==="")
	  {
		  if(pswd===conformpswd)
		  {
		
		setUsers(users+1)
		setId(()=> `UN-${(((users+1)+1000)+"").substring(1)}` )
		const user={id,name,email,dob,pswd,type:"user"}
		console.log(user)

		fetch("http://localhost:8080/api/insert",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(user)
		  }).then(() => {
			
			
		  })

 
		  setName("")
      setDob("")
      setEmail("")
      setPswd("")

	  navigate("/log")
    }

}
}

	  useEffect(()=> {
		fetch("http://localhost:8080/api/view")
		.then(res=>res.json())
		.then((result)=>{
		  setUsers(result)
		  setId(()=> `UN-${(((users+1)+1000)+"").substring(1)}` )
		  console.log(users)
		})
	  },[users])
	  console.log(id)


  return (
    <div>
        <div className="min-h-screen bg-purple-400 flex justify-center items-center">
	<div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
			<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
				account to enjoy all the services without any ads for free!</p>
		</div>
		<div className="space-y-4">
        <input type="name" value={name} placeholder="Name" required="" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" name='name' onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ''))} />
			<input type="email" value={email} placeholder="Email Addres"required="" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" name='email' onChange={(e) => {setEmail(e.target.value); ValidateEmail()}} onBlur={checkemail}/>
			<input type="date" value={dob} placeholder="Date of Birth" required="" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" name='dob' onChange={(e) => setDob(e.target.value)}/>
        <input type="password" value={pswd} placeholder="Password" required="" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={(e) => setPswd(e.target.value)}/>
		 <input type="password" value={conformpswd} placeholder="Password type again" required="" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={(e) =>setConformpswd(e.target.value)}/> 
    </div>
			<div className="text-center mt-6">
				<button className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"  onClick={handleclick} >Create Account</button>
<p className="mt-4 text-sm">Already Have An Account? </p><a href="/log">SignIn</a>
				
			</div>
		</div>
		<div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
    </div>
  )
}

export default Register