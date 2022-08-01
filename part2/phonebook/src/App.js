import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name:newName
    }
     //false is no duplicates
    if (checkDuplicates(personObject) === false)
    {
      console.log('hi')
      setPersons(persons.concat(personObject))
    }
    else{
      alert(`${personObject.name} is already added to phonebook`)
    }
    setNewName('')
    console.log(persons)
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const checkDuplicates  = (personObject) => {
    const result = persons.some((person) => {
      //console.log('person.name === personObject.name',person.name === personObject.name)
      return person.name === personObject.name
    });
    console.log('result',result)
    return result
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInputChange} value={newName}/>
        </div>
        <div>
          <button type="submit" onClick={onSubmit}>add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      {persons.map(person => {return <div key={person.name}>{person.name}</div>})}
    </div>
  )
}

export default App