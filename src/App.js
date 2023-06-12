import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Homepage from './Component/Homepage';
import About from './Component/About';


 function App() {
  return (
    <div>
      <div className="App">
        <Nav/>
      </div>
        <Routes>
          <Route exact path ='/' element={<Homepage/>}/>
          
          <Route exact path ='/about' element={<About/>}/>
        </Routes>
      
     
    </div>
  );
}
 
export default App;