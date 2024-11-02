import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Prediction from './component/Prediction';

function App() {
  return (
    <>
    <div >
    <Router>
      <Routes>
      <Route path="/" element={<Prediction/> } />
       </Routes>
    </Router>
    </div>
    </>
  )
}

export default App