import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css'
import Homepage from './pages/Homepage.tsx';
import "./assets/css/global.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={< App/>} />
          <Route path="/home" element={<Homepage/>}/>
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
