import React, { useEffect } from 'react' 
import lineData from '../../data/lineData.json'
import {scaleLinear, max, line, select} from 'd3'




function animateLine(currentLine , yScale, xScale, selectedData,vendorColor){



    const drawLine = line()
    .x((d,i)=>xScale(i))
    .y(d=>yScale(d.Volume))

    const linePath = drawLine(selectedData)

    console.log(vendorColor)

    currentLine
    .transition()
    .duration(1000)
    .attr("d", linePath)
    .attr("stroke", vendorColor)
    .attr("fill", "none")



}


function Line(props){
    const  {xScale, yScale, selectedData,vendorColor } = props
    const lineRef = React.createRef()

    

    useEffect(()=>{
        const currentLine = select(lineRef.current)
        animateLine(currentLine , yScale, xScale, selectedData, vendorColor)})



    return <g>
        <path ref={lineRef}/>
    </g>

}

function animateDots(dotsContainer, yScale, xScale,selectedData){


    const dotCoordinates = selectedData.map((row, ind)=>{
        return {x: xScale(ind), y:yScale(row.Volume)}
    })



    console.log(dotCoordinates)

    const dotSelection = dotsContainer.selectAll("circle")


    dotSelection.each(function (d,i){
        select(this)
            .transition()
            .duration(1000)
            .attr("cy", dotCoordinates[i].y)
            .attr("cx",  dotCoordinates[i].x)

    })   

}



function Dots(props){
    const  {xScale, yScale, selectedData} = props
    const dotsRef = React.createRef()


    // console.log(selectedData)

    useEffect(()=>{
        const dotsContainer = select(dotsRef.current)
        animateDots(dotsContainer, yScale, xScale, selectedData)
    })

    const years=[2016,2017,2018,2019, 2020]

    const yearTextStyle={
        fontSize: "4px",
    }


    const dots = selectedData.map((row, ind)=>(
        <g>
        <circle key={ind} r={1}
          fill="black" >
    </circle>

 <text x={xScale(ind)} y={35} style={yearTextStyle}>{years[ind]}</text> 
 </g>
    ))

    return <g ref={dotsRef}>{dots}</g>

}






function LineChart (props){
    const {selectedVendor, vendorColor}= props

    const margin = {top: 10 , right: 20 , bottom: 30 , left: 40 }
    const selectedData=lineData.filter((row=>row.Vendor===selectedVendor))


    const width = 500 - margin.left - margin.right
    const height = 200 - margin.top -margin.bottom 

    const xScaleFactor = 0.2
    const yMin  = 10
    const xAdj = -5

    const xScale = scaleLinear()
    .domain([0, selectedData.length])
    .range([0, width*xScaleFactor])

    const yScale = scaleLinear()
    .domain([0, max(selectedData, d=>d.Volume)])
    .range([height+yMin,yMin])


    const titleTextStyle={}
    const xAxisTextStyle={}



    return (
<g>
       <Dots 
       xScale={xScale}
       yScale={yScale}
       selectedData={selectedData}
       
       />
       <Line 
        xScale={xScale}
        yScale={yScale}
        selectedData={selectedData}
        vendorColor={vendorColor} 
       />
</g>
    )


}

export default LineChart;