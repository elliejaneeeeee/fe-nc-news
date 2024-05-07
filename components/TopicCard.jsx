import React from 'react'

const TopicCard = ({ topic }) => {
  return (
      <p className='topic-card'>{topic.slug}</p>
  )
}

export default TopicCard