import React from 'react'

const ExpandComment = ({ children, isOpen }) => {
  return (
    <div className='comment-options'>{isOpen && children}</div>
)
}

export default ExpandComment