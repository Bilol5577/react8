import React from 'react'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'

import rasm1 from './assets/img1.png'
import rasm2 from './assets/img2.png'
import rasm3 from './assets/img3.png'
import rasm4 from './assets/img4.png'
import rasm5 from './assets/img5.png'
import rasm6 from './assets/img6.png'
import rasm7 from './assets/img7.png'
import rasm8 from './assets/img8.png'
import rasm9 from './assets/rasm9.png'
import rasm10 from './assets/rasm10.png'
import rasm13 from './assets/rasm13.png'



const App = () => {
  const usercard = [
    {
      image: rasm1,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm2,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm3,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm4,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm5,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm6,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm7,
      name: 'Emily Johnson',
      job: 'Product Manager',

    },
    {
      image: rasm8,
      name: 'Emily Johnson',
      job: 'Product Manager',

    }
  ]

  const infocard = [
    {
      image: rasm9,
      name: 'Discovering the World of Mountains',
      job: 'In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. ',

    },
    {
      image: rasm10,
      name: 'Discovering the World of Mountains',
      job: 'In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. ',

    },
    {
      image: rasm10,
      name: 'Discovering the World of Mountains',
      job: 'In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. ',

    },
    {
      image: rasm10,
      name: 'Discovering the World of Mountains',
      job: 'In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. ',

    },
    {
      image: rasm13,
      name: 'Discovering the World of Mountains',
      job: 'In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. ',

    },
  ]

  return (
    <div>
      <Header usercard={usercard} />
      <Section infocard={infocard} />
    </div>
  )
}

export default App
