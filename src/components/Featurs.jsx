import React from 'react'
import car from './img/car.png'
import './Featurs.css'
import garant from './img/garant.png'
import weightCar from './img/weightcar.png'
import coin from './img/coin.png'
import like from './img/like.png'

export default function Featurs() {
  return (
    <div className='featWrapp'>
      <div style={{display : "flex"}}>
        <div><img src={car} alt="123" style={{
            marginTop : '5px'
        }}/></div>
        <div className='carDiv' style={{
            width : "200px",
            marginLeft : "22px",
            marginRight : "25px"
            }}>
            Быстрая доставка <br/>по Москве и в любой регион России
        </div>
        <div style={{display : "flex"}}>
        <div><img src={garant} alt="123" /></div>
        <div className='carDiv' style={{
            width : "200px",
            marginLeft : "29px",
            marginRight : "23px"
            }}>
            Все товары имеют официальную гарантию производителя
        </div>
            </div>
            <div style={{display : "flex"}}>
        <div><img src={weightCar} alt="123" /></div>
        <div className='carDiv' style={{
            width : "173px",
            marginLeft : "22px",
            marginRight : "49.53px",
            marginTop : "20px"
            }}>
            Более 100 000 товаров
        </div>
            </div>
            <div style={{display : "flex"}}>
        <div><img src={coin} alt="123" /></div>
        <div className='carDiv' style={{
            width : "173px",
            marginLeft : "24.49px",
            marginRight : "58.8px",
            marginTop : "20px"
            }}>
            Любой способ оплаты
        </div>
            </div>
            <div style={{display : "flex"}}>
        <div><img src={like} alt="123" /></div>
        <div className='carDiv' style={{
            width : "198px",
            marginLeft : "26.5px",
            // marginRight : "58.8px",
            marginTop : "20px"
            }}>
            Высокие оценки клиентов
        </div>
            </div>
      </div>
    </div>
  )
}
