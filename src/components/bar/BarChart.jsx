import React, { useEffect } from 'react' 
import barData from '../../data/barData'


export default function BarChart (props){

    const {selectedVendor} = props




    useEffect(()=>{
        // console.log(barData.barData.filter((row=>row.Vendor===selectedVendor)))
        // console.log(selectedVendor)

    },[selectedVendor])

    const selectedData=barData.barData.filter((row=>row.Vendor===selectedVendor))

    console.log(selectedData)

    const bars = selectedData.map((row, ind)=><rect key={row.Volume+Math.random()} x={ind*10} y="10" width="5px" height={row.Volume/50} fill="green"/>)




    return <g>

        {/* <rect x="10" y="10" width="5px" height="10px" fill="black"></rect> */}
        {bars}
    </g>
}