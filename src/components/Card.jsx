import React from 'react'
import Button from './Button'

const Card = ({header, p, pledge, count, value, disabled, handleFinalModal, handleModal}) => {
    return (
        <div className={`card ${disabled ? 'disabledCard' : ''}`}>
            <h4 className='card_header'>{header}</h4>
            <h5 className='card_pledge'>Pledge {pledge} or more</h5>
            <p className='card_desc'>{p}</p>

            <p className='card_count'><span>{count}</span> left</p>
            <div className='card_BTN'>
                <Button value={value} disabled={disabled} className='card_BTN' handleFinalModal={handleFinalModal} handleModal={handleModal}/>
                </div>
        </div>
    )
}

export default Card
