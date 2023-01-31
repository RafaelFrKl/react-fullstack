const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>
//<Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}    

const Content = ({ parts }) =>
    <>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
    </>

const Course = ({course}) => {
    console.log(course)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course