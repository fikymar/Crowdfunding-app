import React, { useState } from 'react'
import '../scss/style.css'
import Button from './Button'

const closeModal = <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4" /></svg>


const SelectionModal = ({ showme, handleModal, handleDollars,handleFinalModal }) => {
    
   

    return (
        <div className={`selectionModal  ${(showme) ? '' : 'hidden'}`}>
            <button title='close' className="closeModal_BTN" onClick={() => handleModal()}>
                {closeModal}
                </button>
            <h1 className='selectionModal_header'>Back this project</h1>
            <p className='selectionModal_desc'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <SelectionModalCard id='checker1' k={1} handleFinalModal={handleFinalModal}  handleModal={handleModal} handleDollars={handleDollars} header='Pledge with no reward' desc='Choose to support us without a reward if you simply believe in our project. As a backer,
  you will be signed up to receive product updates via email.'/>
            <SelectionModalCard id='checker2' k={2} handleFinalModal={handleFinalModal}  handleModal={handleModal} handleDollars={handleDollars} header='Bamboo Stand' desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
  you’ll be added to a special Backer member list." pledge={'$25'} min={25} count={101}/>
            <SelectionModalCard id='checker3' k={3} handleFinalModal={handleFinalModal} handleModal={handleModal} handleDollars={handleDollars} header=' Black Edition Stand' desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included." pledge={'$75'} min={75} count={64} />
            <SelectionModalCard id='checker4' k={4} handleFinalModal={handleFinalModal}  handleDollars={handleDollars} header='Mahogany Special Edition' desc='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  to our Backer member list. Shipping is included.' pledge={'$200'} count={'0'}  />
        </div>
    )
}

            
const SelectionModalCard = ({ k, header, desc, count, pledge, placeholder, id, handleDollars, min, handleFinalModal, handleModal}) => {
    const [check, setCheck] = useState(false);
    const [input, setInput] = useState(25);
    
    const handleInput = () => {
        //console.log(input)
        handleDollars(input)
          
    }

    return (
        <div className={`selectionModal_card ${check ? 'checked' : ''}
        ${ count === '0' ? 'disabledCard' : ''}`} >
           
            <label className='checker' htmlFor={id}></label>
            <input type="radio" title='Set reward' name={id} id={id} onClick={() => setCheck(!check)} />
                
            
            <h4 className="selectionModal_card_header">{header}</h4>
            <p className="selectionModal_card_desc">{desc}</p>
            {pledge ? <h5 className='selectionModal_card_pledge'>Pledge {pledge} or more</h5> : null}
            {count ? <p className='selectionModal_card_count'><span>{count}</span> left</p> : null}

            {check && count !== '0' ?
                (<div className='selectionModal_card_enterPledge'>
                    <p className='selectionModal_card_enterPledge_desc'>Enter your pledge</p>
                    <div className='selectionModal_card_enterPledge_input'>
                    <label htmlFor={k}>$</label>
                    <input value={input} onInput={e => setInput(parseInt(e.target.value))}  type="number" title='Enter value' name={k} id={k} min={min} />

                    </div>
                    <Button value='Continue' title='Confirm pledge' handleInput={handleInput} handleFinalModal={handleFinalModal} handleModal={handleModal}/>
                    </div>
            ) : null }
            
        </div>
    )
}


export default SelectionModal
            
