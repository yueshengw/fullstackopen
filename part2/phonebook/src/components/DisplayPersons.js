import React from 'react'

const DisplayPersons = ({persons, filter, onClick}) => {
    return(
      <div> 
      {persons.map((person,index) => {
        const displayContactFormat = <div key={person.name}>{person.name} {person.number !== undefined && person.number}</div>;
        return filter===''?displayContactFormat:person.name.toLowerCase().includes(filter
          .toLowerCase()) && <>{displayContactFormat}<button onClick={onClick}>delete</button></>
      })}
      </div>
    )
}

export default DisplayPersons