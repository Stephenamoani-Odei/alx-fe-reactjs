import React from "react"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path= "/" element={ <Home/>}/>
        <Route path="/" element={ <About/>}/>  
        <Route path ="/" element = { <Services/>}/>
        <Route path = "/" element= { <Contact/>}/>          
          </Routes>
          <Footer/>
    </BrowserRouter>
   
  )
}
export default App;
