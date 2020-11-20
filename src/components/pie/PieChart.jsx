import React, { useState, useEffect } from "react";
// import { scaleOrdinal } from "d3-scale";
import { pie } from "d3-shape";
import pieData from "../../data/pieData.json";
// import {pieData} from "../../data/pieData.js"
import Slice from "./Slice";

export default function PieChart(props) {
    const {onChangeVendor, selectedVendor} = props

    const [currentPortion, setCurrentPortion] = useState(0)

    useEffect(()=>{
      // const currentVendorObject = pieData.filter((row)=>row.Vendor===selectedVendor)
      //   if(currentVendorObject.length>0){
      //     if(typeof currentVendorObject!=='undefined'){ 
      //       // setCurrentPortion(currentVendorObject[0].Portions)
      //       let aThing = currentVendorObject
      //       // console.log(currentVendorObject)
      //       console.log(aThing[0].Portions)
      //       setCurrentPortion(aThing) 
            
      //     }

      //   }
  
  
    }, [selectedVendor])






  let piePiece = pie();
  const portions = pieData.map((row) => row.Portions);
  const vendors = pieData.map((row)=>row.Vendor)

  // if(selectedVendor){
    
  
  //     if(typeof currentVendorObject!=='undefined'){
        
  //     }

      // const currentVendorPortion = currentVenorObject.Portion
      // console.log(currentVenorObject[0][0].Portions)
    // }
    
  // }




  const vendorColors = [
    "rgba(0, 0, 0, 1)",
    "rgba(0, 255, 221, 1)",
    "rgba(0, 140, 255, 1)",
    "rgba(0, 72, 255, 1)",
    "rgba(174, 0, 255, 1)",
    "rgba(255, 0, 246, 1)",
    "rgba(255, 0, 13, 1)",
    "rgba(0, 255, 174, 1)",
  ];

  function renderSlice(row) {
    const index = row.index;
    return (
      <Slice
        key={index}
        index={index}
        value={row}
        vendor={vendors[index]}
        vendorColor={vendorColors[index+1]}
        onChangeVendor={onChangeVendor}
      />
    );
  }

  return (
    <div id="pieAndText">
    <svg width={500} height={300}>
      <g>
        {/* {pie(portions).map(renderSlice)} */}
        {piePiece(portions).map(renderSlice)}
      </g>
    </svg>
  {/* <div>{`${selectedVendor} ${currentPortion===0? currentPortion*100: 'Vendors'}`}</div> */}
  <div>
    {/* {currentPortion} */}
    </div>
  </div>

  );
}
