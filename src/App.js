import React, { useState , useEffect} from "react";
import PieChart from "./components/pie/PieChart";
import BarChart from "./components/bar/BarChart";
import LineChart from "./components/line/LineChart";
import ButtonsOnly from "./components/pie/ButtonsOnly";
import "./App.css";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("All");
  // const [groupColor, setGroupColor] = useState("grey");


  function updateBarChart(group) {
    setSelectedGroup(group);

    // console.log(selectedGroup)

  }

  useEffect(()=>{
    console.log(selectedGroup)
  },[selectedGroup])



  return (
    <div className="App">
      <div id="buttonContainer">

      <ButtonsOnly onChangeGroup={updateBarChart}/>

      </div>
       
      <svg viewBox="-5 0 100 100" preserveAspectRatio="xMidyMid meet">

     
      <BarChart />
      <LineChart />
      <PieChart />
      </svg>
      
      
    </div>
  );
}

export default App;
