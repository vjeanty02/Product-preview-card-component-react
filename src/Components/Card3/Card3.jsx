import React from "react";
import "./Card3.css"
import { Link } from "react-router-dom";
import { render } from "react-dom";
import Button from '../Button/Button';
import Paragraph from './../Paragraph/Paragraph';
import HeadingSecondary from './../HeadingSecondary/HeadingSecondary';

function Card3({ svg, title, paragraph}) {
  return (
      <div className="card3">
          {svg && <img src={svg} alt={title} className="card3__svg" />}
          <div>
          {title && <HeadingSecondary className="paragraph" txt={title}/>}
            {paragraph && <Paragraph txt={paragraph}/>}
          </div>
      </div>
  );
}

export default Card3;