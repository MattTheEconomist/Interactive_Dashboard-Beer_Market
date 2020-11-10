import React, { useEffect } from 'react' 
import barData from '../../data/barData'


export default function BarChart (props){

    const {selectedVendor} = props


    useEffect(()=>{
        console.log(barData.barData.filter((row=>row.Vendor==selectedVendor)))
        // console.log(selectedVendor)

    },[selectedVendor])


    return <g>

        <rect x="10" y="10" width="5px" height="10px" fill="black"></rect>
    </g>
}