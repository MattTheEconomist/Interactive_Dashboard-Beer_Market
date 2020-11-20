import React, { useEffect } from 'react' 
import barData from '../../data/barDataJson.json'
import { scaleLinear, max, select } from "d3";

const barDimensions={
    barWidth: 7.8,
    barSideMargin: 0.2,
    centerToCenter: 8, 
    labelMarginTop:2
}

const barTextStyle={
    fontSize: "2px",

}


const animateBars=(rectRef, barHeight, volRef,yScaledPoz, vendorColor)=>{

    const rect = select(rectRef.current)

    rect
    .transition()
    .duration(1000)
    .attr("height", barHeight+.05)
    .attr("y", yScaledPoz)
    .attr("fill", vendorColor)

  
    
    const text = select(volRef.current)
    text
    .transition()
    .duration(1000)
    .attr("y", yScaledPoz+barDimensions.labelMarginTop )
    .attr("fill", "white")

}



function Bar(props){
    const rectRef = React.createRef()
    const volRef = React.createRef()
    const {x,y, width, barHeight, volumeValue, BeerType, yScaledPoz, xAxisPoz, vendorColor} = props


    useEffect(()=>{
        animateBars(rectRef,barHeight, volRef, yScaledPoz, vendorColor)
    })


    // fill={vendorColor}

    return (
        <g>
            <rect x={x} y={y} width={width} ref={rectRef} ></rect>
            <text
            x={x+(barDimensions.centerToCenter/2)}
            textAnchor="middle"
            style={barTextStyle}
            fill={volumeValue===0?"grey":"white"}
            ref = {volRef}

            >
                {volumeValue}
               
            </text>

            <text 
            x={x+1}
            y={xAxisPoz}
            style={barTextStyle}
            
            >
            {BeerType}
            </text>
        </g>
    )


}



export default function BarChart (props){

    const {selectedVendor, barAreaHeight, vendorColor} = props

    
    const margin = {top: 10 , right: 20 , bottom: 30 , left: 40 }
    const barChartHeight = barAreaHeight - margin.top - margin.bottom;

    const selectedData=barData.filter((row=>row.Vendor===selectedVendor))


    const titleTextPoz = {titleX:10, titleY: 7 }


    const yScale = scaleLinear()
    .domain([0, max(selectedData, d => d.Volume)])
    .range([barChartHeight, 0])


    const bars = selectedData.map((row, ind)=>(

        <Bar 
        key={ind}
        x={ind*barDimensions.centerToCenter}
        y={0}
        width={barDimensions.barWidth}
        barHeight = {(barChartHeight - yScale(row.Volume)) / 2}
        volumeValue={Math.round(row.Volume)}
        BeerType={row.BeerType}
        yScaledPoz= {(yScale(row.Volume)/2)+margin.top}
        xAxisPoz = {42}
        vendorColor={vendorColor}
        
        />
    ))

    const xAxisLabel = selectedData.map((row, ind)=>{
        <text
        key={ind}
        // x={ind*barDimensions.centerToCenter}
        x={5}
        y={10}
        style={barTextStyle}
        textAnchor="middle"
        fill="green"        
        >
            {row.Volume}
        </text>

    })


    let barTitle = selectedVendor
    if(barTitle==="All"){
        barTitle = "All Vendors"
    }


    const title= (
        <text
        x={titleTextPoz.titleX}
        y={titleTextPoz.titleY}
        textAnchor="start"
        style={barTextStyle}
        >
            {/* {selectedData[0].Vendor} */}
            {`${barTitle} Sales by Beer Type 2020`}
        </text>
    )

    return <g>
        {title}
        {bars}
        
        
    </g>
}