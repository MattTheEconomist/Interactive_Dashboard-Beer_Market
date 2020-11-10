import React from "react";

export default function ButtonsOnly(props) {
    const {onChangeVendor} = props


    const vendorList = ['All','Budweiser','Heinekin','Guiness','Devils Backbone','Dogfish Head' ,'Samuel Adams']

    function buttonClick(e){
        const currentVendor = e.target.value
        // console.log(currentVendor)
        onChangeVendor(currentVendor)

        // setSelectedGroup(e.target.value)
    }

    const buttonList = vendorList.map((el)=>
<button onClick={buttonClick} key={el+"Button"} value={el}>{el}</button>

    )



  return (
      <div>

          <ul>
              {buttonList}
          </ul>
          
     

   
      
      </div>
   
  );
}
