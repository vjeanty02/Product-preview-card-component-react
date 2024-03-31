import React from "react";
import "./Button.css"
import { Link } from "react-router-dom";
import { render } from "react-dom";

function Button({txt, link}) {
  return (
     <>
     {txt && link && <Link className={`btn btn-${txt}`} to={link} >{txt}</Link>}
     </>
  );
}

export default Button;