import React from 'react'
import axios from "axios";
import Updatepage from './updatepage';
// import {useNavigate} from 'react-router-dom';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Bookmap from './bookmap';
import Header from './header';
import "./pagination.css"
import ReactPaginate from "react-paginate";



const api = axios.create({
  baseURL: "http://localhost:8080",
});
const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

function Adminpage(props) {

    const[id,setId]=new useState("")
    const[bookname,setBookname]=new useState("")
    const[author,setAuthor]=new useState("")
    const[totalcopy,setTotalcopy]=new useState("")
    const[avilablecopy,setAvilablecopy]=new useState("")
    const[totalid,setTotalid]=new useState("")
     const[users,setUsers]=new useState("")
    const[data,getData]=new useState([])
   

    
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
    
    
    let adminInfo=localStorage.getItem("AdminInfo");
    adminInfo=JSON.parse(adminInfo);
  
    let adminid=adminInfo.id
   



    function handleclick(e){
		e.preventDefault()
	  
		
		setUsers(users+1)
		setId(()=> `ISBN-${(((users+1)+1000)+"").substring(1)}` )
		const user={id,bookname,author,totalcopy,avilablecopy}
		console.log(user)

		fetch("http://localhost:8080/api/bookinsert",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(user)
		  }).then(() => {



refresh()
        ///////
        
      // fetch("http://localhost:8080/api/getbook")
      // .then((res) =>
      //     res.json())

      // .then((response) => {
      //     console.log(response);
      //     getData(()=>response.map((item, i) => {
      //       return <Bookmap item={item}key={i} update={update}  />
      //     })
      //       );
      // })


		  })

 
		  setBookname("")
      setAuthor("")
      setTotalcopy("")
      setAvilablecopy("")

	 
    }



	  useEffect(()=> {
		fetch("http://localhost:8080/api/idsize")
		.then(res=>res.json())
		.then((result)=>{
		  setUsers(result)
		  setId(()=> `ISBN-${(((users+1)+1000)+"").substring(1)}` )
		  console.log(users)
		})
	  },[users])
	  console.log(id)

    useEffect(() => {
      fetchData()
  }, [])


  // 
  
  const fetchData = () => {
    fetch("http://localhost:8080/api/getbook")
        .then((res) =>
            res.json())

        .then((response) => {
            console.log(response);
            getData(response);
            


        })
     

}
const list=data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => 
//console.log(item)
 <Bookmap item={item} key={index}  refresh={refresh}/>
)
  function refresh()
  {
  
    
      fetch("http://localhost:8080/api/getbook")
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
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
   


  }
  
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log("pageCount",pageCount)
  };
  
  return (
  





<>
<Header/>
  {/* component */}
  <div className="flex h-screen bg-gray-200 items-center justify-center ">
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
           value={bookname}
           required
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
          required
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
            type="number"
            required
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
            type="number"
            required
            value={avilablecopy}
            placeholder=" Available copy"
            onChange={(e) => {setAvilablecopy(e.target.value>totalcopy ? totalcopy: e.target.value )}}
          />
        </div>
      </div>
      




      
     
      <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
        
        <button className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2" onClick={handleclick}>
          Create
        </button>
      </div>
    </div>
  </div>





  <h1> <p
  style={{
    color: "#009900",
    fontSize: 50,
    fontStyle: "italic",
    textAlign: "center"
   
  }}
>

BOOK Details
</p>

  
    </h1>
    <table >

  

         
                <tr>
                    <th>ISBN no:</th>
                    <th>Bookname</th>
                    <th>Author</th>
                    <th >totalcopy</th>
                    <th>Availablecopy</th>
                    <th >Edit</th>
                    <th>Delete</th>
                    
                </tr>
                
                  {list}
                
               

            </table>



<div>
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
</div>



</>









    
  )
}

export default Adminpage