import Person from './Person'

const Persons = ({ persons, deletePerson }) => {
    return (
        <>
            {persons.map(person =>
                <Person key={person.id} person={person} deletePerson={deletePerson} />
            )}
            
        </>
    )
}

export default Persons