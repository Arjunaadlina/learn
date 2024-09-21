import React from "react";

import HomePage from "./pages/HomePage";
import './style/style.css'
import AddPage from "./pages/Addpage";
import { Route, Routes } from "react-router-dom";


function App(){
  return(
    <div className="contact-app">
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/add" element={<AddPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App