import { useState } from 'react'
import { useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
import axios from 'axios'
import handleService from './services/Handle'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState([null,'notification']) //message and style
  const backendURL = "https://pure-garden-08206.herokuapp.com/api/persons"
  //const backendURL = "http://localhost:3008/api/persons"
  useEffect(() => {
    // console.log('test 2', handleService.getAll(backendURL))
    handleService.getAll()
      .then(returnData => {
        console.log('test 4',returnData)
        setPersons(returnData)
      })
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
      // axios
      //   .post('http://localhost:3001/persons',personObject)
      //   .then(response => {
      //     //alert(`${response.data.name} was added!`)
      //     console.log('test 1',response.data)
      //     setPersons(persons.concat(response.data))
      //   })
      handleService
        .add(personObject)
        .then(returnData => {
          console.log('test 6',returnData)
          // checkDuplicates(returnData)===false && 
          setPersons(persons.concat(returnData))
          setNotification([`${returnData.name} was added successfully!`,'notification'])
          setTimeout(() => setNotification([null, null]), 5000)
        })
        .catch(error => {
          console.log('error 4040404',error)
          setNotification([error.response.data.error,'notification error'])
          setTimeout(() => setNotification([null, null]), 5000)
        })
    }
    else{
      // alert(`${personObject.name} is already added to phonebook`)
      if (window.confirm(`${personObject.name} is already added to phonebook, do you want to update the existing number?`)) {
        personObject.id = persons.find(person => person.name === personObject.name).id;
        handleService 
          .update(personObject)
          .then(returnData => {
            console.log('test 10',returnData)
            handleService
              .getAll()
              .then(returnData => setPersons(returnData))            
          })
          .catch(() => setNotification([`Information of ${personObject.name} has already been deleted from the server`, 'notification error']))
      }
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
    console.log('test 5',personObject)
    const result = persons.some((person) => person.name === personObject.name);
    return result
  }

  const deleteContact = (personObject) => {
    window.confirm(`Do you really want to delete ${personObject.name}`) &&
    handleService
      .deleteContact(personObject)
      .then(returnData => {
        console.log('return data',returnData)
        setPersons(persons.filter(person => person.id != personObject.id))
        console.log('contact list',persons)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter onChange={handleInputChange} value={filter} id='filter' />
      <h2>add a new</h2>
      <PersonForm onChange={handleInputChange} nameValue={newName} numberValue={newNumber} onSubmit={onSubmit}/>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} filter={filter} onClick={deleteContact}/>
    </div>
  )
}

export default App