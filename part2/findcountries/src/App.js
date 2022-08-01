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
  let output = data.map(countries => {
    filter === '' ? <h1 key={countries.name.official}>{countries.name.official}</h1> : countries.name.official.toLowerCase().includes(filter.toLowerCase()) && <h1 key={countries.name.official}>{countries.name.official}</h1>
  });
  console.log(output)

  return (
    <div>
      {output.length > 10000000 ? <div>Too many matches, specify another filter</div> : output}
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