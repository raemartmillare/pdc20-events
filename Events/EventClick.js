import React, {useState} from "react";

function EventonClick (){


// for target ----------------------------------------------
    const [inputValue, setInputValue] = useState ("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
//-=-----------------------------------------

const handleSubmit = (event) => {
    event.preventDefault();
    console.log ("form Submission Prevented")
    handleClick();
    // you can add additional form handling

};

const handleEvent = (event) => {
    event .stopPropagation(); // this will be the event
    console.log(`Event type: ${event.type}`);
    handleClick();
}

    const handleClick = () => {
        alert("Button Click");
    };

    return (

        <form  onSubmit={handleSubmit}>
        <div>

        
        <input type="text" onChange={handleChange}/> 
        <button onClick={handleClick}>Click me! </button> 
        <button type="submit"> submit </button>
        </div>
        </form>
    );
}

export default EventonClick;