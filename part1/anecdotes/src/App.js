import { useState } from 'react'
import { useEffect } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ text }) => {
  return (
    text != null ? <div>{text}</div> : <div>Nothing to show yet</div>
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
  const [mostPopAnecdote, setMostPopAnecdote] = useState(null)

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

  const anecdoteWithMostVote = () => anecdotes[votes.indexOf(Math.max.apply(Math, votes))]

  useEffect(() => {
    nextAnecdote()
    const array1 = [1, 3, 2, 3];
    setVotes(new Array(anecdotes.length).fill(0))
  }, [])

  useEffect(() => {
    Math.max.apply(Math, votes) > 0 && setMostPopAnecdote(anecdoteWithMostVote())
  }, [votes])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <Button text='vote' onClick={voteAnecdote} />
      <Button text='next anecdote' onClick={nextAnecdote} />
      <h1>Anecdote with the most vote</h1>
      <Display text={mostPopAnecdote} />
    </div >
  )
}

export default App