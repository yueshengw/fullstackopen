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

const Country = ({ country, show }) => {
  const [shouldShow, setShouldShow] = useState(show);
  //console.log(findCountryInfo(output[0].key));
  let languages = []

  for (const key in country.languages) {
    languages.push(country.languages[key])
  }
  console.log(shouldShow, country)
  const toggleShouldShow = () => {
    console.log('pressed')

    if (shouldShow) {
      setShouldShow(false);
    }
    else {
      setShouldShow(true);
    }
  }

  return (
    <>
      <h1>{country.name.official}</h1>
      {<button onClick={() => toggleShouldShow()}>{shouldShow === false ? <>show</> : <>collapse</>}</button>}
      {shouldShow &&
        <>
          <h2>Capital: {country.capital}</h2>
          <h2>Area Code: {country.area}</h2>
          <h2>Continent: {country.continents}</h2>
          {languages.length === 1 ? <h2>Language </h2> : <h2>Languages</h2>}
          <ul>{languages.map(language => <li key={language}><h3>{language}</h3></li>)}</ul>
          <img src={country.flags.png} /></>}
    </>
  )
}

const DisplayOutput = ({ data, filter }) => {
  let output = data.map(country => {
    return filter === '' ? <div key={country.name.official}>{country.name.official}</div> : country.name.official.toLowerCase().includes(filter.toLowerCase()) && <div key={country.name.official}>{country.name.official}</div>
  }).filter(output => output !== false);

  //this is to find the country object
  const findCountryInfo = (officialName) => {
    let tempData = [...data]
    console.log(officialName)
    return tempData.filter(country => country.name.official === officialName)
  }

  let displayOutput = filter === ''
    ?
    <div>Enter letters to start</div> : output.length > 10
      ?
      <div>Too many matches, specify another filter</div>
      :
      output.length === 0
        ?
        <div>No match</div> :
        output.length === 1 ?
          <Country country={findCountryInfo(output[0].key)[0]} show={true} />
          :
          output.map((country) => {
            let countryObject = findCountryInfo(country.key)[0];
            console.log(countryObject)
            return <Country country={countryObject} show={false} key={countryObject.name.official} />
          })

  return (
    <div>
      {displayOutput}
    </div>
  )
}

const App = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  //console.log(filter)
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