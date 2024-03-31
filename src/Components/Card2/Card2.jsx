import React from "react";
import "./Card2.css"
import { Link } from "react-router-dom";
import { render } from "react-dom";
import Button from './../Button/Button';
import Paragraph from './../Paragraph/Paragraph';
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function Card2({ img, title, paragraph, btnTxt, btnLink}) {
  return (
    <div className="card2">
    {img && <img src={img} alt={title} className="card2__img" />}
      <div className="card2__info">
        {title && <HeadingSecondary className="paragraph" txt={title}/>}
        {paragraph && <Paragraph txt={paragraph}/>}
        {btnTxt && btnLink && <Button txt={btnTxt} link={btnLink}/>}
      </div>
    </div>
    
  );
}

export default Card2;