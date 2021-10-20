import React from "react";

function Total({exercises}) {

   let total = (exercises) => {
       let result = 0
        for(let i=0; i<exercises.length; i++) {
            result += exercises[i]
        }
        return result
      }

    total = total(exercises)



    return (
       <p>Number of exercises: {total}</p>
    )
}

export default Total;