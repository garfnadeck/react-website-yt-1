import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>check out theses EPIC destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel throught the islands of Bali in a private cruise'
              label='luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='adventure'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Travel throught the islands of Bali in a private cruise'
              label='luxury'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Travel throught the islands of Bali in a private cruise'
              label='luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
