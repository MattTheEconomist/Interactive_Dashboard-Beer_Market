import React, { useState } from "react";
// import { scaleOrdinal } from "d3-scale";
import { pie } from "d3-shape";
import pieData from "../../data/pieData.json";
// import {pieData} from "../../data/pieData.js"
import Slice from "./Slice";

export default function PieChart(props) {
    const {onChangeVendor} = props

    // console.log(onChangeVendor)



  let piePiece = pie();
  const portions = pieData.map((row) => row.Portions);
  const vendors = pieData.map((row)=>row.Vendor)

//   console.log(portions);

  const vendorColors = [
    "rgba(0, 0, 0, 1)",
    "rgba(0, 255, 221, 1)",
    "rgba(0, 140, 255, 1)",
    "rgba(0, 8, 255, 1)",
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
    <svg width={500} height={300}>
      <g>
        {/* {pie(portions).map(renderSlice)} */}
        {piePiece(portions).map(renderSlice)}
      </g>
    </svg>
  );
}
