import React from 'react';
import Carditem from './Carditem';
import './Card1.css';

function Card1() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Desitinations</h1>
      <div className='cards__container'>
      
        <div className='cards__wrapper'>

            <ul className='cards__items'>
                <Carditem src='Images/BackGround image 4.jpg' alt='Travel-image' text="Explore the hidden places in the world" label='Adventure' path='/services'/>
                <Carditem src='Contact-background' alt='Pilgrims-image' text="Explore the pilgrims places in our India" label='Pilgrims' path='/services'/>
                <Carditem src='Contact-background' alt='Mystry-image' text="Explore the mystry places in our India" label='Mystry' path='/services'/>
            </ul>
            <ul className='cards__items'>
                <Carditem src='logo.jpg' alt='Treking-image' text="Explore the trekking places in the world" label='Trekking' path='/services'/>
                <Carditem src='Contact-background' alt='hillstation-image' text="Explore the hillstation places in our India" label='Hillstation' path='/services'/>
                <Carditem src='Contact-background' alt='beaches' text="Explore the beach places in our India" label='beaches' path='/services'/>
            </ul>            
        </div>
      </div>

    </div>
  )
}

export default Card1;
