import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr] = useState(new Uint8Array(8)) //zero filled array of length 8
  const [mostVoted, setMostVoted] = useState(0)

  const vote = () => {
    const copy = [...voteArr] //copy contents of Vote array into a new array 
    copy[selected] += 1   // increment the value in position selected by 1
    setVoteArr(copy) 
    console.log(voteArr)

    if (copy[selected] > copy[mostVoted]){
      setMostVoted(selected)
    }
    
  }

  const randAnecdote = () => {
    let rand_num = Math.floor((Math.random() * 8));; //Return a random whole number between 0 and 7
    setSelected(rand_num)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {voteArr[selected]} votes</div>
      <button onClick={vote}>
        Vote
      </button>
      <button onClick={randAnecdote}>
        Next Anecdote
      </button>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[mostVoted]}</div>
      <div>Has {voteArr[mostVoted]} votes</div>
    </div>
  )
}

export default App