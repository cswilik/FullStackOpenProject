import React, { useState } from 'react'
import Featured from './Featured'

const App2 = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  let copy = {...votes}

  const handleClick = () => {
      let num = Math.floor(Math.random() * anecdotes.length)
      setSelected(num)
  }

  const handleVote = () => {
    copy[selected] = (copy[selected] || 0) + 1
    setVotes(copy)
  }

  let sortedVotes = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);

  console.log(sortedVotes[0])
  return (
    <div>
        <h1>Anecdote of the Day</h1>
      "{anecdotes[selected]}" has {votes[selected]} vote(s)
      <br></br>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Random Anecdote</button>
      <Featured />
    </div>
  )
}

export default App2;