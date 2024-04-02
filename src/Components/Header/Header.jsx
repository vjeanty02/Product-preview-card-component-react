import { useEffect } from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


function Header() {
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
          var winTop = window.scrollY;
          if (winTop >= 200) {
            document.body.classList.add("sticky-header");
          } else {
            document.body.classList.remove("sticky-header");
          }
        });
      }, []);

    return (
        <header className="header">
            <img className="header__logo" src="/Logo_miceva_1.svg" alt="Logo MICEVA" />
            <nav className="header__navbar">
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/">Accueil</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/evangelisation">Evangélisation</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/education">Education</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/health">Santé</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/environnement">Environnement</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}


export default Header;