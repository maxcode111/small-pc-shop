
import React from 'react'
import CarouselBox from './CarouselBox'


export default function BigBlocks() {
  return (
    <div style={{display : "flex"}}>
      <div>
      <CarouselBox/>
      </div>
      <div>
      <div className="skyBlock">
        <p className='skyMain'>СБОРКИ</p>
        <p className="skyLow">ДО 40 000 ₽</p>
        <p className="skyDesc"><a href="./">ПОДРОБНЕЕ</a></p>
      </div>
      <div className="cyanBlock">
      <p className='skyMain'>ТОВАРЫ</p>
        <p className="skyLow">СО СКИДКОЙ</p>
        <p className="skyDesc"><a href="./">ПОДРОБНЕЕ</a></p>
      </div>
      </div>
    </div>
  )
}
