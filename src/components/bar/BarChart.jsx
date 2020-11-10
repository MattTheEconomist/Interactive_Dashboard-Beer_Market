import React, { useEffect } from 'react' 
import barData from '../../data/barData'
import { scaleLinear, max, select } from "d3";

function Bar(props){
    const rectRef = React.createRef()

    const {x,y, width, height, color} = props

    return (
        <g>
            <rect x={x} y={y} width={width} height={height} ref={rectRef}></rect>
        </g>
    )


}



export default function BarChart (props){

    const {selectedVendor, height} = props
    
    const margin = {top: 10 , right: 20 , bottom: 30 , left: 40 }
    const barChartHeight = height - margin.top - margin.bottom;

    const selectedData=barData.barData.filter((row=>row.Vendor===selectedVendor))


    const bars = selectedData.map((row, ind)=>(
        <Bar 
        key={ind}
        x={ind*8}
        y={0}
        width={7.8}
        height={row.Volume/50}

        />
    ))

    const barTextStyle={
        fontSize: "2px"
    }

    const title= (
        <text
        x={12}
        y={34}
        textAnchor="start"
        style={barTextStyle}
        >
            {selectedData[0].Vendor}
        </text>
    )

    return <g>
        {title}
        {bars}
    </g>
}