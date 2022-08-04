import React from 'react'

const Notification = ({message}) => {
    console.log('message',message[1])
  return (
    message[0] != null && <div className={message[1]}>{message[0]}</div>
  )
}

export default Notification