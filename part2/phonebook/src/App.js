import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => { //Form Submit
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    let duplicate = persons.find(p => p.name === newName) //checks if the new name is a duplicate by searching persons array of objects 
    if (duplicate){ //If dupliucate exists, throw warning
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(personObject)) //new Name added to our Persons array via a new copy
    }
    setNewName('') //resets the value of the controlled input element 
    setNewNumber('') //resets the value of the controlled input element
   }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  //const result = condition ? val1 : val2 
  //result is set to value of val1 if condition is True. 
  //result is set to value of val2 if condition is False.
  //Filters by names containing substring
  const personsToShow = newFilter === '' ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newFilter))
  //console.log("log: ", personsToShow)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a New Person</h3>
      <PersonForm 
        addPerson={addPerson}
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App