import React from 'react'
import DocDesc from './components/DocDesc'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import Hits from './../src/components/Hits'
import Collections from './components/Collections'
import Brands from './components/Brands'
import State from './components/State'
import Seoblock from './components/Seoblock'


export default function App() {
  return (
    <div>
      <Header/>
      <Collections/>
      <Hits/>
      <Brands/>
      <State/>
      <Seoblock/>
      <Footer/>
      <DocDesc/>

    </div>
  )
}
