// import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Prediction from './component/Prediction';
import Signin from './component/SignIn';
import Personal from './component/Personal';


function App() {
  return (
    <>
    <div >
    <Router>
      <Routes>
      <Route path="/" element={< Signin/>} />
      <Route path="/Personal" element={<Personal/>} />
      <Route path="/Prediction" element={<Prediction/> } />
       </Routes>
    </Router>
    </div>
    </>
  )
}

export default App