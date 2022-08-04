import React from 'react'

const Notification = ({message}) => {
  return (
    message != null && <div className="notification">{message}</div>
  )
}

export default Notification