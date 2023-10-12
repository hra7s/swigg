import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
    console.log(error)
  return (
    <div>
    <p>
    {error.status}</p>
    <p>{error.statusText}</p>
    <img className='error' src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"/>
    </div>
  )
}

export default Error