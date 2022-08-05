const express = require("express")
const app = express()
app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/api/persons", (req,res) => {
    res.json(persons)
})

app.get("/info", (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const contact = persons.find(person => person.id === id)
    console.log(contact)
    if (contact) {
        res.json(contact)
    }
    else {
        res.status(404).end();
    }
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(persons)
    persons = persons.filter(person => person.id !== id)
    console.log(persons)
    res.status(204).end()
})
const PORT = 3008
app.listen(PORT)