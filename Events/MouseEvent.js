import React from "react";

function MouseEvent (){

    const handleMouseEnter = ()=> {
        console.log ("Mouse Enter the button ")
    }

    const handleDoubleCLick = () => {
        alert("Button double click")
    }

    return(

        <div>
<button onMouseEnter={handleMouseEnter} onDoubleClick={handleDoubleCLick}>
    Hover or Click
</button>

        </div>


    );

}

export default MouseEvent;