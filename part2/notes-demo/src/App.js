import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  //Effect-hook: By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, []) // If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id) //The array find method is used to find the note we want to modify
    const changedNote = { ...note, important: !note.important } //we create a new object that is an exact copy of the old note, apart from the important property that has the value flipped (from true to false or from false to true)

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
         //The map method creates a new array by mapping every item from the old array into an item in the new array. In our example, the new array is created conditionally so that if note.id !== id is true; we simply copy the item from the old array into the new array. If the condition is false, then the note object returned by the server is added to the array instead.
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }).catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note 
              key={note.id} 
              note={note} 
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
