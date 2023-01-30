import React from 'react'
import burger from './img/burger.png'
import person from './img/person.png'
import heart from './img/heart.png'
import shop from './img/shop.png'

export default function UnderNav() {
  return (
    <div>
                  <div className="underNav">
              <button className="catalog"><img src={burger} alt="pic" className='burger'/>КАТАЛОГ ТОВАРОВ</button>
              <button className="actions">АКЦИИ</button>
              <button className="brands">БРЕНДЫ</button>
              <input type="text" placeholder='Что вы ищете?' className='finder'></input>
              <button className="person"><img src={person} alt="" /></button>
              <button className="heart"><img src={heart} alt="" /></button>
              <button className="shop"><img src={shop} alt="" /></button>
            </div>
    </div>
  )
}
