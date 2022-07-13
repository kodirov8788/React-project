import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Service from "./pages/service/Service"
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

