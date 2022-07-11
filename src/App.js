import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Service from "./pages/service/Service"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className={`App`}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/service' element={<Service />} />

        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
