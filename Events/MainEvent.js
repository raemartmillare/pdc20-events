import React from "react";
import EventonClick from "./EventClick";
import KeyboardEvent from "./KeyboardEvent";
import MouseEvent from "./MouseEvent";
import ItemList from "./ItemList";

function MainEvent (){
    return (
        <div>
            <EventonClick/>
            <KeyboardEvent/>
            <MouseEvent/>
            <ItemList/>
        </div>
    );
}

export default MainEvent;