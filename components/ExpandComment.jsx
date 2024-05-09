import React from 'react'

const ExpandComment = ({ children, isOpen }) => {
  return (
    <div>{isOpen && children}</div>
)
}

export default ExpandComment