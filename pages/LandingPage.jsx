import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <Header>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Header>
      <NavLink to="/articles">See all Articles</NavLink>
    </>
  )
}

export default LandingPage