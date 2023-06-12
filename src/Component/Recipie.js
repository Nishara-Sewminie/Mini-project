import React from 'react'
import './recipie.css';

const Recipie = () => {

    const handleClick = () => {
          // Handle click event
          console.log('Link clicked');
    }
  return (
    <div>
      <div className="container">
      <div className="centered-div">
        <span className='text'><a href='https://www.w3schools.com' className="href" onClick={handleClick} target='_blank' rel="noreferrer">Cakes</a></span>
    </div>
      <div className="centered-div"></div>
      <div className="centered-div"></div>
    </div>
    </div>
  )
}

export default Recipie

