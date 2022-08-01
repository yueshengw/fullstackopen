import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const SearchForm = ({ input, onSubmit, onChange, data }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        find countries: <input value={input} onChange={onChange} />
      </div>
    </form>
  )
}

const DisplayOutput = ({ data, filter }) => {
  let output = data.map(country => {
    return filter === '' ? <div key={country.name.official}>{country.name.official}</div> : country.name.official.toLowerCase().includes(filter.toLowerCase()) && <div key={country.name.official}>{country.name.official}</div>
  }).filter(output => output !== false);
  console.log(output)

  return (
    <div>
      {filter === '' ? <div>Enter letters to start</div> : output.length > 10 ? <div>Too many matches, specify another filter</div> : output.length === 0 ? <div>No match</div> : output}
    </div>
  )
}

const App = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  console.log(filter)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const handleInput = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <SearchForm input={filter} onSubmit={onSubmit} onChange={handleInput} data={data} />
      <DisplayOutput data={data} filter={filter} />
    </div>
  )
}

export default App