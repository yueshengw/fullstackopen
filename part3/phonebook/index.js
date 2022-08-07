const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(express.json())
app.use(morgan('tiny'))
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

function generateId() {
  let tempNum = Math.ceil(Math.random() * 1000)
  while (persons.some(person => person.id === tempNum)) {
    tempNum = Math.ceil(Math.random() * 1000)
  }
  return tempNum
}

app.post("/api/persons", (req, res) => {
  const body = req.body

  if (!body.name) {
    return res.status(404).json({error:"name missing"})
  }
  else if (!body.number) {
    return res.status(404).json({error:"number missing"})
  }
  else if (persons.some(person => person.name === body.name)) {
    return res.status(404).json({error:"name already exists in phonebook"})
  }

  const person = {
    "id": generateId(),
    "name": body.name,
    "number": body.number
  }

  persons = persons.concat(person)
  res.json(person)
})

const PORT = 3008
app.listen(PORT)