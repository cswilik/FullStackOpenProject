import React from "react";

function Total(exercises) {

    let total = exercises.exercises1 + exercises.exercises2 + exercises.exercises3
    return (
       <p>Number of exercises {total}</p>
    )
}

export default Total;