import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import { render } from "react-dom";

function Card({ cardLink, image, html, svg, title, paragraph, button, buttonLink}) {
  return (
      <div className="card__container">
        {image &&  
        <div className="card__image">
          <img src={image} alt={title} className="card__cover" />
        </div>}

      <div className="card__info">
        {html && <div className="card__html" dangerouslySetInnerHTML={{ __html: html }}></div>}
        {svg && <img src={svg} alt={title} className="card__svg" />}
        {title && <h3 className="card__title">{title}</h3>}
        {paragraph && <p className="card__paragraph">{paragraph}</p>}
        {button && buttonLink && <Link className="card__btn" to={buttonLink} >{button}</Link>}
      </div>
      </div>
  );
}

export default Card;