import { useState } from 'react'
import { useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
import axios from 'axios'
import handleService from './services/Handle'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const backendURL = "http://localhost:3001/persons"

  useEffect(() => {
    console.log('test 2', handleService.getAll(backendURL))
    setPersons(handleService.getAll(backendURL))
    console.log('test 3', persons)
  }, [])
  
  useEffect(() => {
    console.log(filter)
  },[filter])
  
  const test = (text) => {
    console.log(text)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name:newName,
      number:newNumber
    }

     //false is no duplicates (based on name)
    if (checkDuplicates(personObject) === false)
    {
      // setPersons(persons.concat(personObject))
      //setPersons(persons.handleService(backendURL))
      axios
        .post('http://localhost:3001/persons',personObject)
        .then(response => {
          //alert(`${response.data.name} was added!`)
          console.log('test 1',response.data)
          setPersons(persons.concat(response.data))
        })
    }
    else{
      alert(`${personObject.name} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case 'name':
        setNewName(event.target.value);
        break;
      case 'number':
        setNewNumber(event.target.value);
        break;
      case 'filter':
        setFilter(event.target.value);
        break;
      default:
        break;
    }
  }

  const checkDuplicates  = (personObject) => {
    const result = persons.some((person) => {
      return person.name === personObject.name
    });
    return result
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleInputChange} value={filter} id='filter' />
      <h2>add a new</h2>
      <PersonForm onChange={handleInputChange} nameValue={newName} numberValue={newNumber} onSubmit={onSubmit}/>
      <h2>Numbers</h2>
      {/* <DisplayPersons persons={persons} filter={filter}/> */}
    </div>
  )
}

export default App