import React from "react";

export default function ButtonsOnly(props) {
    const {onChangeVendor} = props


    const vendorList = ['All','Budweiser','Heinekin','Guiness','Devils Backbone','Dogfish Head' ,'Samuel Adams']

    const vendorColorObject=['rgba(0, 0, 0, 1)','rgba(0, 255, 221, 1)','rgba(0, 140, 255, 1)','rgba(0, 8, 255, 1)','rgba(174, 0, 255, 1)','rgba(255, 0, 246, 1)', 'rgba(255, 0, 13, 1)','rgba(0, 255, 174, 1)']


    

    function restoreTopLevelView(e){
        // const currentVendor = e.target.value
        // const currentColor = vendorColorObject[vendorList.indexOf(currentVendor)]

        const blackColor  = 'rgba(0, 0, 0, 1)'
        onChangeVendor('All', blackColor)

    }

//     const buttonList = vendorList.map((el)=>
// <button onClick={buttonClick} key={el+"Button"} value={el}>{el}</button>







  return (
      <div>
          <button onClick={restoreTopLevelView}>Restore Top Level View</button>      
       
      </div>
   
  );
}
