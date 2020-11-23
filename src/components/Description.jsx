import React, {useState} from 'react'; 


export default function Description(props){

    const {selectedVendor} = props

    let innerText = ''

    if(selectedVendor==="Budweiser"){
        innerText = "Budweiser was founded 1851.  They Specialize in Lager"

    }else if(selectedVendor==="Heinekin"){
        innerText = "Heinekin was founded 1821.  They Specialize in Lager"

    }else if(selectedVendor==="Guiness"){
        innerText =  "Guiness was founded 1602.  They Specialize in Stout"
    }else if(selectedVendor==="Devils Backbone"){
        innerText = "Devils Backbone was founded 1952.  They offer a wide range of selection but their Lager is their most popular offering"
    }else if(selectedVendor==="Dogfish Head"){
        innerText = "DogFish Head was founded 1985. Their IPa is quite popular"
    }else if(selectedVendor==="Samuel Adams"){
        innerText =  "Samuel Adams was founded 1621 by the man himself Mr. Samuel Adams. Their most popular beer, Boston Lager combusts when mixed with Boston Cream Pie and Clam Chowder. It was originally invented as a weapon to use against the British in the Revolutionary War. "
    }

const descStyle={
// backgroundColor:'grey',
marginTop: '-50%', 
alignItems: 'center', 
backgroundColor: 'grey'


}


    return (
        <div id="descriptionContainer" style={descStyle}>

        <h2 id="descriptionText">{innerText}</h2>
 
    </div>
    )
 
}