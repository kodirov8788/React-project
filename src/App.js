import { useState } from 'react';
import './App.css';
import Grid from "./components/grid/GridItem"
import Sidebar from './components/sidebar/Sidebar';
import Image1 from "./images/1.jpg"
import Image2 from "./images/2.jpg"
import Image3 from "./images/3.jpg"
import Image4 from "./images/4.jpg"
import Image5 from "./images/5.jpg"
// import { GridIte } from "./components/grid/GridItem"


function App() {
  const [click, setClick] = useState(false)
  const Click = () => {
    if (click === false) {
      setClick(true)
    } else {
      setClick(false)
    }
  }
  console.log(click);


  return (
    <div className={`App`}>

      <Sidebar />
      <button onClick={Click} >Button</button>
      <div className="">
        <Grid text={"Axmad"} image={Image1} />
        <Grid text={"Sardor"} image={Image2} />
        <Grid text={"Muhammadali"} image={Image3} />
        <Grid text={"Maqsudbek"} image={Image4} />
        <Grid text={"Xasanboy"} image={Image5} />
      </div>


    </div >
  );
}

export default App;
