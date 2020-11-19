import React, { useState, useEffect } from "react";
import { arc } from "d3-shape";
import { select } from "d3";

function animateSlice(){

    return null
}

function Slice(props){
    const { index, value, vendorColor, label, onChangeVendor, vendor } = props;

    const sliceRef = React.createRef();
    
    function angle(value){
        let a = ((value.startAngle + value.endAngle) * 90) / Math.PI - 90;
        return a > 90 ? a - 180 : a;
    }



    
  const outerRadius = 15;
  const innerRadius = outerRadius / 2;

  const sliceArc = arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)

  function sliceClick(e){
    onChangeVendor(e.target.id, vendorColor)
  }

  const pieTextStyle={
      fontSize:"1.4px"
  }



    return (
<g transform={'translate(150, 160) scale(9,9)'}>
    <path d={sliceArc(value)} fill={vendorColor} id={vendor} onClick={sliceClick}></path>
    <text style={pieTextStyle} transform={`translate(${sliceArc.centroid(value)}) rotate(${angle(value)})`}>{vendor}</text>

</g>

    )

}

export default Slice 