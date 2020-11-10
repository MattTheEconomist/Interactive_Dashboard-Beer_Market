import React, { useState , useEffect} from "react";
import PieChart from "./components/pie/PieChart";
import BarChart from "./components/bar/BarChart";
import LineChart from "./components/line/LineChart";
import ButtonsOnly from "./components/pie/ButtonsOnly";
import "./App.css";

function App() {
  const [selectedVendor, setSelectedVendor] = useState("All");
  // const [groupColor, setGroupColor] = useState("grey");


  function updateBarChart(group) {
    setSelectedVendor(group);
  }

  // useEffect(()=>{
    // console.log(selectedVendor)
  // },[selectedVendor])



  return (
    <div className="App">
      <div id="buttonContainer">

      <ButtonsOnly onChangeVendor={updateBarChart}/>

      </div>
       
      <svg viewBox="-5 0 100 100" 
      preserveAspectRatio="xMidYMid meet"
      >

     
      <BarChart selectedVendor={selectedVendor} height={100}/>
      <LineChart />
      <PieChart />
      </svg>
      
      
    </div>
  );
}

export default App;
