import React from "react";

const navigation = () => {
    return (
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span></label> 
        <div className="navigation__background">

        </div>
        <nav className="navigation__nav">
        <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">My Works</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
                    </ul>
        </nav>
        </div>
    )
}

export default navigation;