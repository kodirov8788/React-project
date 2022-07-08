import './App.css';
import { useState } from "react"

function App() {
  const [aa, setClick] = useState(false)
  const [data, setData] = useState({
    name: "Ali",
    username: "Ali99"
  })
  const makeObj = () => {
    setData({ name: "Axmad", username: "Ortiqov" })
  }
  console.log(data);

  // const [dataArr, setDataArr] = useState([
  //   {
  //     id: 1,
  //     name: "Ali",
  //     username: "Ali99"
  //   },
  //   {
  //     id: 2,
  //     name: "Ali2",
  //     username: "Ali992"
  //   }
  // ])
  // console.log(dataArr);



  // console.log("click >>>", aa);
  // const changeBack = () => {
  //   if (aa === false) {
  //     setClick(true)
  //   } else {
  //     setClick(false)
  //   }
  // }
  return (
    <div className={`App ${aa ? "dark" : ""}`}>
      <h1 style={{ color: aa ? "white" : "black" }}>Salom</h1>
      {/* <button onClick={changeBack}>change Back</button> */}
      <br />
      <br />
      {/* <button onClick={() => { !aa ? setClick(true) : setClick(false) }}>change Back2</button> */}

      <button onClick={makeObj}> MAke Obj</button>
    </div >
  );
}

export default App;
