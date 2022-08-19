import React from 'react'
import {BrowserRouter,Routes,Route,Link,Redirect} from "react-router-dom";
  
import Log from './componet/log';

import User from './user';
import Loginregister from './componet/loginregister';
import Test from './componet/Test';
import Register from './componet/register';
import Adminpage from './componet/adminpage';
import Updatepage from './componet/updatepage';
import Header from './componet/header';
import Usehomepage from './componet/usehomepage';
import Userheader from './componet/userheader';
import Userprofile from './componet/userprofile';

//import Navigation from './componet/navigation';

function App() {

  return (
   <div className='App'>
   
    
    <BrowserRouter>  
           
             
      <Routes>  
      <Route exact path='/userheader' element={<Userheader />}></Route> 
      <Route exact path='/userprofile' element={<Userprofile />}></Route> 
            
            <Route exact path='/register' element={< Register />}></Route>  
            <Route exact path='/log' element={< Log />}></Route>  
            <Route exact path='/admin' element={< Adminpage/>}></Route>  
            <Route exact path='/user' element={< User />}></Route> 
            <Route exact path='/updatepage' element={< Updatepage />}></Route> 
            <Route exact path='/header' element={< Header />}></Route>  
            <Route exact path='/userhomepage' element={<Usehomepage/>}></Route>  
            {/* <Route exact path='/admin' element={< Admin />}></Route>   */}
     </Routes>  
   
  </BrowserRouter>  
    
   </div>



   
    
  );
}

export default App;
