import { useState } from 'react'
import { useEffect } from 'react'

const Filter = ({ onChange, value, id }) => {
  return (
  <form onSubmit={(event) => {event.preventDefault()}}>
      <div>
        filter shown with <input onChange={onChange} value={value} id={id}/>
      </div>
    </form>
  )
}

const PersonForm = ({onChange, nameValue, numberValue, onSubmit}) => {
  return (      
    <form>
      <div>
        name: <input onChange={onChange} value={nameValue} id='name' />
      </div>
      <div>
        number: <input onChange={onChange} value={numberValue} id='number' />
      </div>
      <div>
        <button type="submit" onClick={onSubmit}>add</button>
      </div>
    </form>
  )
}

const DisplayPersons = ({persons, filter}) => {
  return(
    <div> 
    {persons.map(person => {
      const displayContactFormat = <div key={person.name}>{person.name} {person.number !== undefined && person.number}</div>;
      return filter===''?displayContactFormat:person.name.toLowerCase().includes(filter
        .toLowerCase()) && displayContactFormat
    })}
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  //console.log(newNumber)

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
      //console.log('hi')
      setPersons(persons.concat(personObject))
    }
    else{
      alert(`${personObject.name} is already added to phonebook`)
    }
    console.log('hi')
    setNewName('')
    setNewNumber('')
    //console.log(persons)
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
      case 'filter':
        setFilter(event.target.value);
        break;
      default:
        break;
    }
  }

  const checkDuplicates  = (personObject) => {
    const result = persons.some((person) => {
      //console.log('person.name === personObject.name',person.name === personObject.name)
      return person.name === personObject.name
    });
    //console.log('result',result)
    return result
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleInputChange} value={filter} id='filter' />
      <h2>add a new</h2>
      <PersonForm onChange={handleInputChange} nameValue={newName} numberValue={newNumber} onSubmit={onSubmit}/>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} filter={filter}/>
    </div>
  )
}

export default App