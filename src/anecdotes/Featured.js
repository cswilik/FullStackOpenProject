import React from "react";

const Featured = ({anecdotes, votes}) => {
    console.log(votes)
    let max = 0
    let maxKey = undefined
    let featured = " "
    for(let key in votes) {
        if (votes[key] > max) {
            max = votes[key]
            maxKey = key
        }
        featured = anecdotes[maxKey]
    }
    

    return (
        <div>
            <h1>Anecdote with the Most Votes</h1>
            <p>{featured} has {max} votes!</p>
        </div>
        
    )
}

export default Featured;