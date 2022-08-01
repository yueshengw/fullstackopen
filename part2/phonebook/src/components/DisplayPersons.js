import React from 'react'

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

export default DisplayPersons