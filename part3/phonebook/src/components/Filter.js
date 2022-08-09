import React from 'react'

const Filter = ({ onChange, value, id }) => {
    return (
    <form onSubmit={(event) => {event.preventDefault()}}>
        <div>
          filter shown with <input onChange={onChange} value={value} id={id}/>
        </div>
      </form>
    )
  }

export default Filter