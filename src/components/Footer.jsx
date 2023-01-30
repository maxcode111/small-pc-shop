import React from 'react'
import './Footer.css'
import logo from './img/logo.png'
import whatsapp from './img/whatsapp.png'
import instagram from './img/instagram.png'
import telegram from './img/telegram.png'

export default function Footer() {
  return (
    <div className='footer'>
<div>
      <ul className="catalogUl">
        <li><a href="./">Сборки</a></li>
        <li><a href="./">Аксессуары</a></li>
        <li><a href="./">Компьютер в столе</a></li>
        <li><a href="./">Электроника и бытовая техника</a></li>
        <li><a href="./">Ноутбуки</a></li>
        <li><a href="./">Кастомное оформление</a></li>
      </ul>
      <img src={logo} alt="pic" style={{
        width : "214px",
        height : "25px",
        marginLeft : "190px"
      }}/>
      <p className='mmm'>© 2020 mmmpromarket.ru</p>
    </div>
    <ul className='payUl'>
      <li><a href="./">Оплата</a></li>
      <li><a href="./">Доставка</a></li>
      <li><a href="./">Поставщикам</a></li>
      <li><a href="./">Статьи</a></li>
      <li><a href="./">Контакты</a></li>
    </ul>
    <div className='callDiv'>
      <p className='nnumber'>8 495 018-32-10</p>
      <button>ЗАКАЗАТЬ ЗВОНОК</button>
      <ul className="dateUl">
        <li>Пн-Пт: 10:00 — 20:00</li>
        <li>Сб: 10:00 — 18:00</li>
        <li>Вс: выходной</li>
      </ul>
      <div className="iconLow">
      <img src={whatsapp} alt="" />
      <img src={instagram} alt="" />
      <img src={telegram} alt="" />
      </div>
    </div>
      <div className="adres">
        <ul className='adresUl'>
            <li>Склад:</li>
            <li>Москва, ул. Салтыковская, 6 стр 11</li>
            <li><a href="./">zakaz@mmmpromarket.ru</a></li>
        </ul>
        <button className='yandexButton'/>
      </div>
    </div>
  )
}
