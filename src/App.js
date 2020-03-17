import React from 'react';
import './App.scss';

import Navigation from "./controller/navigation";
import Header from "./controller/header";
import Card from "./controller/cards";

import SpeedMeter from "./controller/speedoMeter";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
       <main className="section-about">
        <div  className="u-ceneter-text u-margin-bottom-8">
            <h1 className="heading-secondary">
                    My Work
                </h1>
        </div>
        <div className="row">
                    <div className="col-1-of-3" >
                       <Card cardHeadingTitle="Tallint RMS" 
                        classToAdd={{forPicture:"card__picture--1",
                        forHeading:"card__heading-span--1", 
                        forBack:"card__side--back-1"}}/>
                    </div>


                    <div className="col-1-of-3">
                    <Card cardHeadingTitle="Tallint RMS" 
                        classToAdd={{forPicture:"card__picture--2",
                        forHeading:"card__heading-span--2", 
                        forBack:"card__side--back-2"}}/>
                    </div>


                    <div className="col-1-of-3">
                        <Card cardHeadingTitle="Tallint RMS" 
                            classToAdd={{forPicture:"card__picture--3",
                            forHeading:"card__heading-span--3", 
                            forBack:"card__side--back-3"}}/>
                        </div>
                </div>
        {/* <SpeedMeter /> */}
       </main>
       <footer class="footer">
            <div class="footer__logo-box">

                {/* <picture class="footer__logo">
                    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                            media="(max-width: 37.5em)"/>
                    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png"/>
                   
                </picture> */}

 
                
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        faceboook
                        instagram
                        twitter
                        linkedin
                        {/* <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                        </ul> */}
                    </div>
                </div>
                <div class="col-1-of-2">
                    {/* <p class="footer__copyright">
                        Built by <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                    </p> */}
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
