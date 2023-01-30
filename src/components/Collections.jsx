import React from 'react'
import './Collections.css'
import lap from './img/lap.png'
import keyboard from './img/keyboard.jpg'
import mouse from './img/mouse.jpg'
import mic from './img/mic.jpg'
import headphones from './img/headphones.jpg'

export default function Collections() {
  return (
    <div className='colwrapp'>
        <p className="plitkol">Коллекции плитки</p>
        <div className="colflex">
        <div className="lapdiv">
            <img src={lap} alt="" className='lappic'/>
            <div className="lapname">Ноутбуки</div>
            <div className="lapdesc">Asus ROG</div>
        </div>
        <div className="right">
        <div className="rightflex">
          <div className="keydiv">
            <img src={keyboard} alt="123" className='keypic'/>
            <div className="keyname">Клавиатуры</div>
            <div className="keydesc">Hyper X</div>
          </div>
          <div className="mousediv">
            <img src={mouse} alt="123" className='mousepic'/>
            <div className="mousename">Мышки</div>
            <div className="mousedesc">Hyper X</div>
          </div>
        </div>
        <div className="rightflexdown">
        <div className="mousediv">
            <img src={headphones} alt="123" className='mousepic'/>
            <div className="mousenamee">Наушники</div>
            <div className="mousedesc">Steel-series</div>
          </div>
          <div className="keydiv">
            <img src={mic} alt="123" className='keypic'/>
            <div className="keyname">Микрофоны</div>
            <div className="keydesc">Thronmax</div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
