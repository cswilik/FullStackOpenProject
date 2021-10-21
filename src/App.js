import React, { useState } from 'react'
import Button from './Button'
import Totals from './Total'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([])
  const [average, setAverage] = useState(0)
  const [percentages, setPercentages] = useState(0)




  const goodFeedback = () => {
    setTotal(total.concat(1))
    setGood(good + 1)
    findAverage()
    handlePercentages(total)
  }
  const neutralFeedback = () => {
    setTotal(total.concat(0))
    setNeutral(neutral + 1)
    findAverage()
    handlePercentages(total)
  }
  const badFeedback = () => {
    setTotal(total.concat(-1))
    setBad(bad + 1)
    findAverage()
    handlePercentages(total)
  }

  const findAverage = () => {
    let count = 0
    for(let i=0; i< total.length; i++) {
        count += total[i]
    }
    let avg = count/total.length
    if (isNaN(avg)) {
      setAverage('not enough data')
    } else setAverage(avg)
}
  
const handlePercentages = (xs) =>
  setPercentages(xs.reduce ((pcts, x) => ({...pcts, [x]: (pcts[x] || 0) + 100 / (xs.length)}), {}))


  // if (props.total.length === 0) {
  //   return (
  //       <>
  //           <h1>Statistics</h1>
  //           <p>No Feedback Given</p>
  //       </>
  //   )
  

  return (
    <div>
      <h1>Give Us Feedback!</h1>
      <Button handleClick={goodFeedback} text="good"/>
      <Button handleClick={neutralFeedback} text="neutral"/>
      <Button handleClick={badFeedback} text="bad"/>
      <h1>Statistics</h1>
      {total.length === 0 ? <p>No Feedback Given</p> :
        <div>
         <Totals text="good" values={good}/>
         <Totals text="neutral" values={neutral}/>
         <Totals text="bad" values={bad}/>
         <Totals text="all" values={total}/>
         <Totals text="average" values={average}/>
         {percentages[1] === undefined ?
              <Totals text='positive' values='0%'/> :
              <Totals text="positive" values={percentages[1] + '%'}/>
         }
       </div>
      }
    </div>
  )
  }

export default App;
