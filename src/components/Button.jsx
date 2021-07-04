import React, { useState } from 'react'
import '../scss/style.css';

const Button = ({ value, disabled, handleModal, handleFinalModal, handleBackers, handleInput, title}) => {
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
          
        }

        if (handleInput) {
            handleInput()
        }
     

    }
    
    return (
        <button type='button' title={title} onClick={() => handleClick()}
           
           
            className={`button ${clicked ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>{value}</button>
    )
}

export default Button
