const express = require('express')
const app = express()

app.use(express.json()) // add New Notes: HTTP POST requests

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

// Define 5 routes to the application
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

// 5. Add New Notes
const generateId = () => { //Give a new ID
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) { // content property may not be empty.
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false, // If the content property has a value, the note will be based on the received data. If the important property is missing, we will default the value to false
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})