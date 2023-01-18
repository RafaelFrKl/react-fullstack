import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
 
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total parts={parts} />
    </div>
  )
}

export default App