import React, { useState } from "react";
import PieChart from "./components/pie/PieChart";
import BarChart from "./components/bar/BarChart";
import LineChart from "./components/line/LineChart";
import ButtonsOnly from "./components/pie/ButtonsOnly";
import "./App.css";

function App() {
  const [selectedVendor, setSelectedVendor] = useState("All");
  const [vendorColor, setVendorColor] = useState("rgba(0, 0, 0, 1)");

  function updateAllCharts(vendor, color) {
    setSelectedVendor(vendor);
    setVendorColor(color);
  }

  return (
    <div id="app">
      <div id="buttonContainer">
        <ButtonsOnly onChangeVendor={updateAllCharts} />
      </div>
      <div id="pieChartArea">
          <PieChart 
          onChangeVendor={updateAllCharts}
          selectedVendor = {selectedVendor}
          />
      </div>
      <div id="barAndLine">
        <div id="barChartArea">
          <svg viewBox="-5 0 100 100">
            <BarChart
              selectedVendor={selectedVendor}
              barAreaHeight={100}
              vendorColor={vendorColor}
            />
          </svg>
        </div>
        <div id="lineChartArea">
          {/* <svg viewBox="-5 0 100 100"> */}
            <LineChart selectedVendor={selectedVendor} vendorColor={vendorColor} />
          {/* </svg> */}
        </div>
      </div>


    </div>
  );
}

export default App;
