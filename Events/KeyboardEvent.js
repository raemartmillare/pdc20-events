import React from "react";

function KeyboardEvent (){

    const handleKeyDown = (event)=> {
        if (event.key == "enter") {
            alert ("enter key pressed");
        } 
    };

    const handleKeyPress = (event) => {
        console.log (`key pressed: ${event.key}`)

    }

    return (
    <div>
        <input
            typeof="text"
            placeholder="Type Something"
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            />


    </div>

    );

}
export default KeyboardEvent;


