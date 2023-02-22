const express = require('express')
const app = express()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

// Define 4 routes to the application
// 1. Defines an event handler that is used to handle HTTP GET requests made to the application's / root
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
//The event handler function accepts two parameters.The first request parameter contains all of the information of the HTTP request, and the second response parameter is used to define how the request is responded to.

// 2. Defines an event handler that handles HTTP GET requests made to the notes path of the application:
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// 3. Fetch an individual resource
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    //console.log(id)
    const note = notes.find(note => note.id === id)
    //console.log(note)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

// 4. Deletion Route
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})