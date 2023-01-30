import React from "react";
import "./State.css";

export default function Stateprops(props) {
  return (
    <div className="bacgraundstate">
      <img className="stateimg" src={props.state} alt="ошибка сети..." />
      <p className="state_p">{props.p}</p>
    </div>
  );
}
