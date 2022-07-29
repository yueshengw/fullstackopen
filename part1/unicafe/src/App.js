import { useState } from 'react'
import { useEffect } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ text, value, symbol }) => {
  return (
    value === null?<div>{text}: No Value yet</div>:<div>{text}: {value}{symbol}</div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(null)

  const voteGood = () => setGood(good + 1)
  const voteNeutral = () => setNeutral(neutral + 1)
  const voteBad = () => setBad(bad + 1)

  useEffect(() => setAll(good+neutral+bad), [good, neutral, bad])
  useEffect(() => {
    if (good + bad > 0) {
      setAverage((good + bad*-1)/(good+neutral+bad))
    }
  }, [good, neutral, bad])
  useEffect(() => {
    if (good + neutral + bad > 0) {
      setPositive(good / (good + neutral + bad) * 100)
    }
  }, [good, neutral, bad])
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={voteGood} text='good'/>
      <Button onClick={voteNeutral} text='neutral'/>
      <Button onClick={voteBad} text='bad'/>
      <h1>statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={positive} symbol='%'/>
    </div>
  )
}

export default App