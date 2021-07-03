import React from 'react'
import Button from './Button'

const checkIcon = <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>

const Modal = ({ modal, handleFinalModal, handleBackers}) => {
    return (
        <div className={`modal ${modal ? '' : 'hide'}`}>
            {checkIcon}
            <h1 className='modal_header'>Thanks for your support!</h1>
            <p className='modal_desc'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
            <Button value='Got it!' handleFinalModal={handleFinalModal} handleBackers={handleBackers}/>
        </div>
    )
}

export default Modal
