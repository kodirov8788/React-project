import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
// import { Route, Routes } from "react-router-dom"
// import Service from "./pages/service/Service"


function App() {
  return (
    <div className={`App`}>
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<Service />} />
      </Routes> */}


    </div >

  );
}

export default App;
