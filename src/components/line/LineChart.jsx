import React, { useEffect } from 'react' 
import lineData from '../../data/lineData.json'
import {scaleLinear, max, min, line, select, axisLeft} from 'd3'




function animateLine(currentLine , yScale, xScale, selectedData,vendorColor){



    const drawLine = line()
    .x((d,i)=>xScale(i))
    .y(d=>yScale(d.Volume))

    const linePath = drawLine(selectedData)



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

function animateDots(dotsContainer, yScale, xScale,selectedData, vendorColor){


    const dotCoordinates = selectedData.map((row, ind)=>{
        return {x: xScale(ind), y:yScale(row.Volume)}
    })



    const dotSelection = dotsContainer.selectAll("circle")


    dotSelection.each(function (d,i){
        select(this)
            .transition()
            .duration(1000)
            .attr("cy", dotCoordinates[i].y)
            .attr("cx",  dotCoordinates[i].x)
            .attr("fill", "white")
            .attr("stroke", vendorColor)
            .attr("stroke-width", 0.2)

    })   

}



function Dots(props){
    const  {xScale, yScale, selectedData, vendorColor} = props
    const dotsRef = React.createRef()



    useEffect(()=>{
        const dotsContainer = select(dotsRef.current)
        animateDots(dotsContainer, yScale, xScale, selectedData, vendorColor)
    })

    const years=[2016,2017,2018,2019, 2020]

    const yearTextStyle={
        fontSize: "3px",
    }


    const dots = selectedData.map((row, ind)=>(
        <g   key={ind+30}>
        <circle key={ind} r={1}
          fill="white" 
          stroke = {vendorColor}
          strokeWidth={0.2}>
    </circle>

 <text  key={ind+20} x={xScale(ind)} y={35} style={yearTextStyle}>{years[ind]}</text> 
 </g>
    ))

    return <g ref={dotsRef}>{dots}</g>

}


function YAxis(props){

    const{ selectedData, yScale} = props

    const minVal = min(selectedData, d=>d.Volume)
    const maxVal = max(selectedData, d=>d.Volume)
    const medVal = ((maxVal-minVal)/2)+minVal



    function YScaleCustom(val){
        if(selectedData[0].Vendor ==="All"){
            if(val===minVal){
                return 10
            }if(val===medVal){
                return 15
            }if (val===maxVal){
                return 20
            }
        }else{
            return yScale(val)
        }
    }


    const yAxisFont = {
        fontSize:"3px"
    }



    const yAxisValues = <g>
        <text x={-5} y={YScaleCustom(minVal)} style={yAxisFont}>{maxVal}</text>
        <text x={-5} y={YScaleCustom(medVal)} style={yAxisFont}>{medVal}</text>
        <text x={-5}y={YScaleCustom(maxVal)} style={yAxisFont}>{minVal}</text>

    </g>



 return yAxisValues



}

function LineChartTitle(props){
    const {selectedVendor} = props

    console.log(props.selectedVendor)

    let thisVendor = selectedVendor


    const titleTextStyle = {
        fontSize: "4px"
    }

    if(thisVendor==="All"){
        thisVendor ="All Vendors"
    }

    const titleText = `${thisVendor} Historical Sales`

        
    return <text style={titleTextStyle} x={10} y={3} >{titleText}</text>

}



function LineChart (props){
    const {selectedVendor, vendorColor}= props

    // console.log(selectedVendor)

    const margin = {top: 10 , right: 20 , bottom: 30 , left: 40 }
    const selectedData=lineData.filter((row=>row.Vendor===selectedVendor))


    const width = 500 - margin.left - margin.right
    const height = 200 - margin.top -margin.bottom 

    const xScaleFactor = 0.2
    const yMin  = 13
    const xAdj = -5
    const xMin = 7

    const xScale = scaleLinear()
    .domain([0, selectedData.length])
    .range([xMin, (width*xScaleFactor)+xMin])

    const yScale = scaleLinear()
    .domain([0, max(selectedData, d=>d.Volume)])
    .range([height+yMin,yMin])

    const yScaleAxis = scaleLinear()
    .domain([0, max(selectedData, d=>d.Volume)])
    .range([0,20])




    return (

        <div id="lineChartContainer">
            {/* <div id="axisContainer"></div> */}
           <svg viewBox="-5 0 100 100"> 
<g >
       <Dots 
       xScale={xScale}
       yScale={yScale}
       selectedData={selectedData}
       vendorColor={vendorColor}
       
       />
       <Line 
        xScale={xScale}
        yScale={yScale}
        selectedData={selectedData}
        vendorColor={vendorColor} 
        />

       <YAxis
       yScale={yScale}
       yScaleAxis={yScaleAxis}
       selectedData = {selectedData}
       />

       <LineChartTitle 
       selectedVendor = {selectedVendor}
       />
</g>

   </svg> 

   </div>
    )


}

export default LineChart;