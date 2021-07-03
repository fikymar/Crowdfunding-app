import React, { useState } from 'react'
import '../scss/style.css';

const Button = ({ value, disabled, handleModal, handleFinalModal, handleBackers, handleInput}) => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = (e) => {
         setClicked(!clicked)

         if (handleModal) {
           handleModal()
         }
        
        if (handleFinalModal) {
             handleFinalModal()
            
        }

        if (handleBackers) {
             handleBackers()
           // console.log(backers)
        }

        if (handleInput) {
            handleInput()
        }
     

    }
    
    return (
        <button type='button' onClick={() => handleClick()}
           
           
            className={`button ${clicked ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>{value}</button>
    )
}

export default Button
