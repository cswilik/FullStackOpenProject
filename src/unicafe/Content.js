import React from "react";
import Part from "./Part";


function Content({parts}) {

    let partElements = parts.map(part => {
       return <li><Part name={part.name} exercises={part.exercises}/></li>;
    })
   
    return (
        <ul>
            {partElements}
        </ul>
    )
}

export default Content;