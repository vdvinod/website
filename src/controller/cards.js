import React from "react";

const card = ({classToAdd}) => {
    return (
        <div className="card">
         
        <div className="card__side card__side--front">
             <div className={"card__picture "+ classToAdd.forPicture}>
                 &nbsp;
             </div>
            
             <h4 className="card__heading">
                 <span className={"card__heading-span "+classToAdd.forHeading}>Tallint, RMS</span>
             </h4>
             <div className="card__btn">
               <span className="card__btn-1">View</span>
             </div>
             
             <div className="card__details">
                 <ul>
                     {/* <li>3 day tours</li>
                     <li>Up to 30 people</li>
                     <li>2 tour guides</li>
                     <li>Sleep in cozy hotels</li>
                     <li>Difficulty: easy</li> */}
                 </ul>
             </div>
        </div>
        <div className={"card__side card__side--back "+classToAdd.forBack}>
             <div className="card__cta">
                 <div className="card__price-box">
                     {/* <p className="card__price-only">Only</p>
                     <p className="card__price-value">$297</p> */}
                 </div>
                 <a href="#popup" className="btn btn--white">View</a>
             </div>
         </div>
    </div>
    )
}

export default card;