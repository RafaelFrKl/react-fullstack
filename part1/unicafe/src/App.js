import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1) 
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total = {total}/>
    </div>
  )
}

export default App