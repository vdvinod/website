import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
            <div className="header__logo-box">
                <img src="img/vinod.png" alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Hi, i'm Vinod, I design & build</span>
                    <span className="heading-primary--sub">YES, I'AM AVAILABLE FOR HIRE</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">explore</a>
            </div> 
       </header>
       <main className="section-about">
        <div  className="u-ceneter-text u-margin-bottom-8">
            <h1 className="heading-secoundry">
                    My Work
                </h1>
        </div>
        <div className="row">
                    <div className="col-1-of-3">
                       <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Tallint, RMS</span>
                                </h4>
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
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        {/* <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p> */}
                                    </div>
                                    <a href="#popup" className="btn btn--white">View</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Indium Carees</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        {/* <li>7 day tours</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li> */}
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        {/* <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$497</p> */}
                                    </div>
                                    <a href="#popup" className="btn btn--white">View</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Hexaware Careers</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        {/* <li>5 day tours</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li> */}
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        {/* <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$897</p> */}
                                    </div>
                                    <a href="#popup" className="btn btn--white">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       </main>
    </div>
  );
}

export default App;
