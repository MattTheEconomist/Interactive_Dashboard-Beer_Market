import React, { useState, useEffect } from "react";
import { arc } from "d3-shape";
import { select } from "d3";




function animateSliceLeave(sliceRef, slice, selectedInnerRadius, outerRadius){
    const el = select(sliceRef.current)



    // console.log("left")

    const newArc = arc()
    .innerRadius(selectedInnerRadius)
    .outerRadius(outerRadius)
    .startAngle(slice.startAngle)
    .endAngle(slice.endAngle);

    
    el.
    select("path")
    .transition()
    .duration(750)
    // .attr("stroke", "none")
    // .style("stroke", "#555")
    .attr("stoke-width", 0)
    //  .attr("fill", "grey")
    // .attr("d", newArc)

    // console.log(newArc)
    
    // console.log(el.id)
}

function Slice(props){
    const { index, value, vendorColor, label, onChangeVendor, vendor } = props;
    const sliceRef = React.createRef();
    const [hoveredSlice, setHoveredSlice] = useState(null);
    const [unHoveredSlice, setUnHoveredSlice] = useState(null)

    function animateSliceEnter(sliceRef, slice, selectedInnerRadius, outerRadius){
        const el = select(sliceRef.current)

        const newArc = arc()
        .innerRadius(selectedInnerRadius)
        .outerRadius(outerRadius)
        .startAngle(slice.startAngle)
        .endAngle(slice.endAngle);
    
        
        el.
        select("path")
        .transition()
        .duration(750)
        // .attr("stroke", "black")
        // .style("stroke", "#555")
        // .attr("stoke-width", 0.3)
        //  .attr("fill", "grey")
        .attr("d", newArc)

        // el
        // .select("path")
        // .style("stroke", "#555")
        // .attr("stoke-width", 0.3)

        
        // if(unHoveredSlice !==null){
        //     el.select("path")
        //     .attr("stroke-width", 0)

        // }

    }

    useEffect(()=>{
        if(hoveredSlice!== null){
            const selectedInnerRadius = outerRadius*.25
            animateSliceEnter(sliceRef, hoveredSlice,selectedInnerRadius, outerRadius)
    
        }
        setUnHoveredSlice(null)

    },[hoveredSlice, sliceRef])


    useEffect(()=>{
        if(unHoveredSlice!==null){
            animateSliceEnter(sliceRef, unHoveredSlice, innerRadius, outerRadius)
        }
        setHoveredSlice(null)

    },[unHoveredSlice, hoveredSlice, sliceRef])






    
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
    // console.log(e.target.id)
    // console.log(e.target.class)
  }

  const pieTextStyle={
      fontSize:"1.4px"
  }



    return (
<g transform={'translate(150, 160) scale(10,10)'}
 onClick={sliceClick}
 onMouseEnter={()=>setHoveredSlice(value)}
 onMouseLeave={()=>setUnHoveredSlice(value)}
 ref={sliceRef}

 >
    <path d={sliceArc(value)} fill={vendorColor} id={vendor} className={vendor}  ></path>
    <text style={pieTextStyle}
    id={vendor}
    textAnchor="middle"
    transform={`translate(${sliceArc.centroid(value)}) rotate(${angle(value)})`}>{vendor}</text>

</g>

    )

}

export default Slice 