import React from 'react'

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

export default PersonForm