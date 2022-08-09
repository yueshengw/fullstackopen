import React from 'react'

const DisplayPersons = ({persons, filter, onClick}) => {
    return(
      <div> 
      {persons.map((person,index) => {
        console.log(person)
        const displayContactFormat = <div key={person.name}><>{person.name} {person.number !== undefined && person.number} <button onClick={() =>onClick(person)}>delete</button></></div>;
        return filter===''?displayContactFormat:person.name.toLowerCase().includes(filter
          .toLowerCase()) && displayContactFormat
      })}
      </div>
    )
}

export default DisplayPersons