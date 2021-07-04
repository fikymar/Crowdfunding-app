import React, { useState } from 'react'
import Header from './Header'
import '../scss/style.css'
import Button from './Button';
import Card from './Card';
import SelectionModal from './SelectionModal';
import Modal from './Modal';

const bookmarkIcon = <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" /><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /></g></svg>;

const logomaster = <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#000" cx="28" cy="28" r="28" /><g fillRule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444" /><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF" /></g></g></svg>;

const Main = () => {
    const [bookmark, setBookmark] = useState(false);
    const [showmodal, setShowmodal] = useState(false);
    const [modal, setModal] = useState(false);
    const [backers, setBackers] = useState(5007);
    const [dollars, setDollars] = useState(89914);
    //console.log(dollars)
  

    const handleModal = () => {
        setShowmodal(!showmodal);
    }

    const handleFinalModal = () => {
       
        setModal(!modal);
       
    }

    
    const handleBackers = () => {
        
        setBackers(backers + 1);
        
    }

    const handleDollars = (x) => {
        setDollars(dollars + x)
    }


    return (
       
        
        <>
            <Modal modal={modal} handleFinalModal={handleFinalModal} handleBackers={handleBackers}/>
            <SelectionModal showme={showmodal} handleModal={handleModal} handleDollars={handleDollars} handleFinalModal={handleFinalModal}  />
            <Header />
          
        <section className='main_layout'>
            <article className="main_header">
               <div className="main_header--logo">{logomaster}</div>
                    <h2>Mastercraft Bamboo Monitor Riser</h2>
                    <p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className='main_header--buttons'> 
                    <Button title='Back this project' value={'Back this project'}  handleModal={handleModal}  />
                        
                    <button
                        className={`main_header--bookmarkBTN ${bookmark ? 'bookmarked' : ''}`}
                        type='button'
                        title='bookmark'
                        onClick={() => setBookmark(!bookmark)} >
                        {bookmarkIcon} <span>Bookmark</span>
                    </button>
                </div>  
            </article>

            <article className="main_counter">
                <div className="main_counter--area">
                    <h1>{`$ ${dollars.toLocaleString('en')}`}</h1>
                    <p>of $100,000 backed</p>
                </div>
                <div className="main_counter--area">
                    <h1>{backers.toLocaleString('en')}</h1>
                    <p>total backers</p>
                </div>
                <div className="main_counter--area">
                    <h1>56</h1>
                    <p>days left</p>
                </div>
                    <label htmlFor="counterRange"></label>
                    <input type="range" id='counterRange' name='counterRange' min='0' max='100000' value={dollars} readOnly/>
            </article>
                
            <article className="main_about">
                <h3 className='main_about--header'>About this project</h3>
                <p className='main_about--desc'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p className='main_about--desc'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                            to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                <Card  handleModal={handleModal} header='Bamboo Stand' p="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list." pledge='$25' count={101} value='Select reward'/>
                <Card handleModal={handleModal} header='Black Edition Stand' p="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included. " pledge='$200' count={64} value='Select reward'/>
                <Card  handleModal={handleModal} header='Mahogany Special Edition' p="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included." pledge='$25' count={0} value='Out of Stock' disabled={true} />
            </article>
            
        </section>
      
        </>
    )
}

export default Main
