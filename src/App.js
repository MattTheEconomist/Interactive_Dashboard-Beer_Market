import React, { useState } from "react";
import PieChart from "./components/pie/PieChart";
import BarChart from "./components/bar/BarChart";
import LineChart from "./components/line/LineChart";
import ButtonsOnly from "./components/pie/ButtonsOnly";
import Description from "./components/Description";

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
      <div id="pieAndLine">
        <div id="pieChartArea">
          <PieChart
            onChangeVendor={updateAllCharts}
            selectedVendor={selectedVendor}
          />
        </div>
        <div id="lineChartArea">
          <LineChart
            selectedVendor={selectedVendor}
            vendorColor={vendorColor}
          />
        </div>
      </div>
        <div id="barChartArea">
          <svg viewBox="-5 0 100 100">
            <BarChart
              selectedVendor={selectedVendor}
              barAreaHeight={100}
              vendorColor={vendorColor}
            />
          </svg>
        </div>
        <div id="textDescriptionArea">
        </div>
  
    </div>
  );
}

export default App;
