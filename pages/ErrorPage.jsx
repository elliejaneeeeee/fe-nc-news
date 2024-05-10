import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='error-page'>
      <h1>Oh No!</h1>
      <h2>Looks like you're lost...</h2>
      <NavLink to='/'>Let us take you back home 🏠</NavLink>
    </main>
  )
}

export default ErrorPage