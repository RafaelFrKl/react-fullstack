import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'


//The callback function now takes the data contained within the response, stores it in a variable, and prints the notes to the console
axios
  .get('http://localhost:3001/persons')
  .then(response => {
    const persons = response.data
    console.log(persons)
  })

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

//Effect-hook: By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, []) // If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

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
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson)) //new Name added to our Persons array via a new copy
        })
    }
    setNewName('') //resets the value of the controlled input element 
    setNewNumber('') //resets the value of the controlled input element
  }

  const deletePerson = id => {
    console.log("Hello There: ", id)
    
    const person = persons.find(p => p.id === id) //The array find method is used to find the note we want to modify
    console.log("Hello There: ", person)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletes(id)
        .then(returnedPerson => {
          //The map method creates a new array by mapping every item from the old array into an item in the new array. In our example, the new array is created conditionally so that if note.id !== id is true; we simply copy the item from the old array into the new array. If the condition is false, then the note object returned by the server is added to the array instead.
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        }).catch(error => {
          alert(
            `the note '${person.content}' was already deleted from server`
          )
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App