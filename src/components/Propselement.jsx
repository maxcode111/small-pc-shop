import React from "react";
import StarProps from "./StarProps";
import './Hits.css'

export default function Propselement(props) {
  return (
    <div className="praductBord">
      <div className="vertical">
        <img className="praduct" src={props.img} />
        <StarProps />
        <p className="xit">{props.xit}</p>
        <p className="acsia">{props.acsia}</p>
        <div className="infoforhits">
          <p>{props.name}</p>
          <h3>{props.country}</h3>
          <div className="PriceAndButton">
            <p className="price">{props.price}₽</p>
            <button className="PriceButton">В корзину</button>
          </div>
          <p className="price priseAcsia">{props.priceAcsia}</p>
        </div>
      </div>
    </div>
  );
}