import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Best Places to Visit in India</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='The city in Uttar Pradesh is chock-full of marvelous Mughal monuments'
              label='Taj Mahal '
              path='https://en.wikipedia.org/wiki/Taj_Mahal'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Despite its crowds and chaos, New Delhi offers tourists a lot to love'
              label='Humayun"s Tomb'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='The Gateway of India and the Taj Mahal Palace Hotel in Mumbai'
              label='Mumbai'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Jaisalmer looks like an Arabian Nights fairy tale brought to life'
              label='Gadi Sagar Temple'
              path='/'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Rishikesh has been on the radar for spiritually minded travelers since the late 1960s'
              label='Rishikesh'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='Varanasi is arguably the holiest place in India.'
              label='Ganges River  '
              
              path='/'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Amritsar, the "Jewel of Punjab," has made its claim to fame with its remarkable Golden Temple'
              label=' Golden Temple'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Incredible beaches down south in Goa'
              label='Palolem Beach'
              path='/'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Kerala is like a breath of fresh air from the intensity of cities like New Delhi and Jaipur up north'
              label='Houseboat'
              path='/'
            />
            <CardItem
              src='images/img-10.jpg'
              text=' Ellora Caves in Maharashtra'
              label='Kailasa Temple'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
