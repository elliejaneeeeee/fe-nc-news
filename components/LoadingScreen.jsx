import React from 'react'
import Lottie from "lottie-react";
import Loading from '../public/loading.json'

const LoadingScreen = () => {
  
  return (
    <main className='loading-text'>
        <Lottie animationData={Loading} />
        <div>Loading</div>
    </main>
  )
}

export default LoadingScreen