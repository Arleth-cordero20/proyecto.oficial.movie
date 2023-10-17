import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import React from 'react'

import {Home} from "./home"
import '../App.css'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route  path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>

    
  )
}

export default App;
