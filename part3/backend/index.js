const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]
  app.get('/',(req, res) => {
    res.send('<h1>Hello World</h1>')
  })

  app.get('/api/notes', (req,res)=>{
    res.json(notes)
  })

  app.get('/api/notes/:id',(req,res) => {
    const id = Number(req.params.id)
    console.log(id)
    const note = notes.find((note) => {
      console.log(note.id, typeof note.id, id, typeof id, note.id === id)
      return note.id === id
    })
    console.log(note)
    if (note) {
      res.json(note)
    }
    else {
      res.status(404).send("id doesn't match any from the database");
    }
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
  })
  // app.delete('/api/notes/:id', (request, response) => {
  //   const id = Number(request.params.id)
  //   notes = notes.filter(note => note.id !== id)
  
  //   response.status(204).end()
  // })
  app.post('/api/notes', (req,res) => {
    const note = req.body
    console.log(note)
    res.json(note)
  })

  const generateId = () => {
    const maxId = note.length > 0 ? Math.max(...notes.map(n => n.id)): 0
    return maxId + 1
  }

  app.post('/api/notes', (req, res) => {
    const body = req.body
    if (!body.content) {
      return res.status(400).json({
        error: "content missing"
      })
    }
    const note = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId()
    }
    notes = notes.concat(note)
    res.json(note)
  })
  const unknownEndpoint = (req, res) => {
    res.status(404).send("unknown endpoint")
  }
  app.use(unknownEndpoint)
const PORT = 3001
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
