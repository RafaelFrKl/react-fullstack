const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}    

const Content = ({ parts }) =>{
    const initialValue = 0
    const total = parts.reduce((sum, p) => sum + p.exercises, initialValue)

    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
                
            )}
            <b>Total of {total} exercises</b>
        </>
    )
}

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