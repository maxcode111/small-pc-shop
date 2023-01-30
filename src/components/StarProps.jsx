import React from "react";
import "./StarProps.css";
import Propselement from './Propselement'

export default function StarProps() {
  return (
    <div>
      <div className="simple_rating">
        <div className="simple_rating_items">
            <input id="simple_rating_5" type="radio"  className="simple_rating_item"  name="simple_rating"  value="5" />
            <label id="simple_rating_5" className="simple_rating_label" For=""></label>
            <input id="simple_rating_4" type="radio"  className="simple_rating_item"  name="simple_rating"  value="4" />
            <label id="simple_rating_4" className="simple_rating_label" For=""></label>
            <input id="simple_rating_3" type="radio"  className="simple_rating_item"  name="simple_rating"  value="3" />
            <label id="simple_rating_3" className="simple_rating_label" For=""></label>
            <input id="simple_rating_2" type="radio"  className="simple_rating_item"  name="simple_rating"  value="2" />
            <label id="simple_rating_2" className="simple_rating_label" For=""></label>
            <input id="simple_rating_1" type="radio"  className="simple_rating_item"  name="simple_rating"  value="1" />
            <label id="simple_rating_1" className="simple_rating_label" For=""></label>
        </div>
      </div>
    </div>
  );
}
