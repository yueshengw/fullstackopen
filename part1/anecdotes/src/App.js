import { useState } from 'react'
import { useEffect } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ text }) => {
  return (
    <div>{text}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState([])
  const [voteStatus, setVoteStatus] = useState(true)

  const generateRandNum = (max) => {
    let temp = Math.floor(Math.random() * max)
    while (temp === selected) {
      temp = Math.floor(Math.random() * max)
    }
    return temp
  }

  const nextAnecdote = () => {
    setSelected(generateRandNum(anecdotes.length))
    setVoteStatus(true)
  }
  const voteAnecdote = () => {
    if (voteStatus === true) {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
      setVoteStatus(false)
    }
  }

  useEffect(() => {
    nextAnecdote()
    /*setInterval(() => {
      console.log(generateRandNum(anecdotes.length))
    }, 1)
    */
    setVotes(new Array(anecdotes.length).fill(0))
  }, [])

  return (
    <div>
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <Button text='vote' onClick={voteAnecdote} />
      <Button text='next anecdote' onClick={nextAnecdote} />
    </div >
  )
}

export default App