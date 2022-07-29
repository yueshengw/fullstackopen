import { useState } from 'react'
import { useEffect } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ text, value, symbol }) => {
  return (
    <div>
      <table>
        <tbody>
      <tr>
      <td>
        {text} 
      </td>
      <td>
        {value}{symbol}
      </td>
    </tr>
    </tbody>
      </table>
    </div>
  )
}
//value === null?<div>{text}: No Value yet</div>:<div>{text}: {value}{symbol}</div>
const Statistics = ({ count, data }) => {
  const info = 
      <>
      <Display text='good' value={data.good} />
      <Display text='neutral' value={data.neutral} />
      <Display text='bad' value={data.bad} />
      <Display text='all' value={data.all} />
      <Display text='average' value={data.average} />
      <Display text='positive' value={data.positive} symbol='%'/>
      </>
  return (
    <>
      {count>0?info:<div>No feedback given</div>}
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(null)
  const [data, setData] = useState({})
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

  useEffect(() => {
    setData({
      'good':good,
      'neutral':neutral,
      'bad':bad, 
      'all':all,
      'average':average,
      'positive':positive
    })
  },[good, neutral, bad])

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={voteGood} text='good'/>
      <Button onClick={voteNeutral} text='neutral'/>
      <Button onClick={voteBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics count={all} data={data}/>
    </div>
  )
}

export default App