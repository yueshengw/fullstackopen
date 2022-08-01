import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  console.log(newNumber)

  const onSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name:newName,
      number:newNumber
    }

     //false is no duplicates (based on name)
    if (checkDuplicates(personObject) === false)
    {
      console.log('hi')
      setPersons(persons.concat(personObject))
    }
    else{
      alert(`${personObject.name} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

  const handleInputChange = (event) => {
    console.log(event.target.id)
    switch (event.target.id) {
      case 'name':
        setNewName(event.target.value);
        break;
      case 'number':
        setNewNumber(event.target.value);
        break;
    }
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
          name: <input onChange={handleInputChange} value={newName} id='name' />
        </div>
        <div>
          number: <input onChange={handleInputChange} value={newNumber} id='number' />
        </div>
        <div>
          <button type="submit" onClick={onSubmit}>add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      {persons.map(person => {return <div key={person.name}>{person.name} {person.number != undefined && person.number}</div>})}
    </div>
  )
}

export default App