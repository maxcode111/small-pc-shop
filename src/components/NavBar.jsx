import React from 'react'
import logo from './img/logo.png'
import frame from './img/Frame.png'
import done from './img/done.png'

export default function NavBar() {
  return (
    <div>
                  <div className="navBar">
                <img src={logo} alt="logo" className="logoPic"/>
                <div className="frameDiv"><img src={frame} alt="asd" className='framePic'/></div>
                <div className='cityDiv'><p className="city">Москва</p></div>
                <p className="number">8-800-555-35-35</p>
                <div className="doneDiv"><img src={done} alt="pic" /></div>
                <div className='orderDiv'><p className="order">Заказать звонок</p></div>
                <ul className="navUl">
                  <li><a href="./">Оплата</a></li>
                  <li><a href="./">Доставка</a></li>
                  <li><a href="./">Поставщикам</a></li>
                  <li><a href="./">Статьи</a></li>
                  <li><a href="./">Контакты</a></li>
                </ul>
            </div>
    </div>
  )
}
