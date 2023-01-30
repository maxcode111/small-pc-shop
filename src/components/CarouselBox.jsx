import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import firstpic from './img/1.jpg';
import secpic from './img/2.jpg';
import thirdpic from './img/3.jfif';

export default function CarouselBox() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src={firstpic}
          alt="First slide"
          style={{width : "1040px" , height : "380px"}}
        />
        <Carousel.Caption>
          <h3>Соберем для вас геймерский сет ап мечты</h3>
          <Button variant = "primary">подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src={secpic}
          alt="Second slide"
          style={{width : "1040px" , height : "380px"}}
        />

        <Carousel.Caption>
          <h3>Уникальные ПК в столе под заказ</h3>
          <Button variant = "primary">подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src={thirdpic}
          alt="Third slide"
          style={{width : "1040px" , height : "380px"}}
        />

        <Carousel.Caption>
          <h3>Геймерские стулья на любой вкус</h3>
          <Button variant = "primary">подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
