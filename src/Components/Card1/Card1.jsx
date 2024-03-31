import React from "react";
import "./Card1.css"
import { Link } from "react-router-dom";
import { render } from "react-dom";
import Button from './../Button/Button';
import Paragraph from './../Paragraph/Paragraph';
import HeadingSecondary from './../HeadingSecondary/HeadingSecondary';

function Card1({ svg, title, paragraph}) {
  return (
      <div className="card1">
          {svg && <img src={svg} alt={title} className="card1__svg" />}
          {title && <HeadingSecondary className="paragraph" txt={title}/>}
          {paragraph && <Paragraph txt={paragraph}/>}
      </div>
  );
}

export default Card1;