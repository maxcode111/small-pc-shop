import React from "react";
import "./Brands.css";

export default function BrandsProps(props) {
  return (
    <div className="dIVbrend">
      <img className="imgBrend" src={props.baner} alt="загрузка..." />
    </div>
  );
}
