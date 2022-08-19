import React from 'react'
import Bookmap from './bookmap';
import { useEffect, useState } from "react";
import Userhomepagecomponent from './userhomepagecomponent'
import Userheader from './userheader';
import  "./pagination.css";
import ReactPaginate from "react-paginate";


function Usehomepage() {

    const[data,getData]=new useState([])

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;



    // let userInfo=localStorage.getItem("UserInfo");
    // userInfo=JSON.parse(userInfo);
    // let a=userInfo.id;







    useEffect(() => {
        fetchData()
    }, [])
  
  
   
    
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
   <Userhomepagecomponent item={item} key={index} fetchData={fetchData} />
)


  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>


<>
<Userheader/>
  {/* ====== Table Section Start */}
  <section className="bg-white py-20 lg:py-[120px]">
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="max-w-full overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-primary text-center">
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     border-l border-transparent
                     "
                  >
                    Book Id
                  </th>
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                  >
                  Book Name
                  </th>
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                  >
                  Author
                  </th>
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                  >
                    Total Copy
                  </th>
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                  >
                   Available Copy
                  </th>
                  <th
                    className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     border-r border-transparent
                     "
                  >
                   Buy
                  </th>
                </tr>
              </thead>
              <tbody>
                
                 {list} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>



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
  )
}

export default Usehomepage