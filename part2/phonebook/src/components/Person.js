import Button from './Button'

const Person = ({ person, deletePerson }) => {
    return (
        <div>{person.name} {person.number} <Button handleClick={() => deletePerson(person.id)} text="delete" /></div>
    )
}

export default Person