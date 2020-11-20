import React, { useState, useEffect } from "react";
import { arc } from "d3-shape";
import { select } from "d3";

function animateSlice(sliceRef, hoveredSlice, selectedInnerRadius, outerRadius){
    const el = select(sliceRef.current)

    const newArc = arc()
    .innerRadius(selectedInnerRadius)
    .outerRadius(outerRadius)
    .startAngle(hoveredSlice.startAngle)
    .endAngle(hoveredSlice.endAngle);

    
    el.
    select("path")
    // transition()
    // .duration(750)
    // .attr("stroke", "black")
    // .style("stroke", "#555")
    // .attr("stoke-width", 0.3)
    // .attr("fill", "grey")
    .attr("d", newArc)
    
    // console.log(el.id)
}

function Slice(props){
    const { index, value, vendorColor, label, onChangeVendor, vendor } = props;
    const sliceRef = React.createRef();
    const [hoveredSlice, setHoveredSlice] = useState(value);
    const [unHoveredSlice, setUnHoveredSlice] = useState(null)

    useEffect(()=>{
        const selectedInnerRadius = outerRadius*.9
        animateSlice(sliceRef, hoveredSlice,selectedInnerRadius, outerRadius)

        // console.log("hi")

    },[
        hoveredSlice,
         sliceRef
        ])




    
    function angle(value){
        let a = ((value.startAngle + value.endAngle) * 90) / Math.PI - 90;
        return a > 90 ? a - 180 : a;
    }



    
  const outerRadius = 15;
  const innerRadius = outerRadius / 2.9;

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
<g transform={'translate(150, 160) scale(9,9)'}
 onClick={sliceClick}
 onMouseEnter={()=>setHoveredSlice(value)}
 onMouseLeave={()=>setUnHoveredSlice(value)}
 >
    <path d={sliceArc(value)} fill={vendorColor} id={vendor}  ></path>
    <text style={pieTextStyle}
    textAnchor="middle"
    transform={`translate(${sliceArc.centroid(value)}) rotate(${angle(value)})`}>{vendor}</text>

</g>

    )

}

export default Slice 