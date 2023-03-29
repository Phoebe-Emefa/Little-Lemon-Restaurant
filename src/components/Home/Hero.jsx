import React from 'react'
import food from '../../assets/hero-image.jpg'
import '../../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='info'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            <button>Reserve a Table</button>
        </div>
        <div className='hero-image'>
            <img src={food} alt='food on a tray' />
        </div>
    </div>
  )
}

export default Hero