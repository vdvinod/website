import React from 'react';
import './App.scss';

import Navigation from "./controller/navigation";
import Header from "./controller/header";
import Card from "./controller/cards";

import SpeedMeter from "./controller/speedoMeter";
import ChatBox from "./controller/chatBox";

import dash from "./assets/img/dash.png";
import resume from "./assets/img/resume.png";
import offer from "./assets/img/offer.png";

class App extends React.Component {

    state = {
        showViewPopUp: false,
        showChat: false,
        loading: true
    }
    componentDidMount = () =>{
        
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }
    showPopUpViewHandler = () => {
        console.log("hii");
        this.setState({
            showViewPopUp: true
        })
    }

    closePopUpHandler = () => {
        this.setState({
            showViewPopUp: false
        })
    }

    showChatBox = () =>{
        console.log("hi");
        this.setState({
            showChat: !this.state.showChat
        });
    };

    render () {
        return (
        <div>
             {!this.state.loading && <div className="App" >
                <Navigation showChatBox={this.showChatBox}/>
                <Header />
                {this.state.showChat && <ChatBox showChatBox={this.showChatBox}></ChatBox>}
               <main className="section-about">
                <div  className="u-ceneter-text u-margin-bottom-8" id="work">
                    <h1 className="heading-secondary">
                            My Work
                        </h1>
                </div>
                <div className="row">
                            <div className="col-1-of-3" >
                               <Card cardHeadingTitle="Tallint RMS" 
                                classToAdd={{forPicture:"card__picture--1",
                                forHeading:"card__heading-span--1", 
                                forBack:"card__side--back-1"}}
                                showPopUpViewHandler={this.showPopUpViewHandler}/>
                            </div>
        
        
                            <div className="col-1-of-3">
                            <Card cardHeadingTitle="Indium Careers" 
                                classToAdd={{forPicture:"card__picture--2",
                                forHeading:"card__heading-span--2", 
                                forBack:"card__side--back-2"}}/>
                            </div>
        
        
                            <div className="col-1-of-3">
                                <Card cardHeadingTitle="Hexaware Careers" 
                                    classToAdd={{forPicture:"card__picture--3",
                                    forHeading:"card__heading-span--3", 
                                    forBack:"card__side--back-3"}}/>
                                </div>
                        </div>
                  
                {/* <SpeedMeter /> */}
               </main>
               <footer className="footer">
               
                    <div className="footer__logo-box">
        
                        {/* <picture className="footer__logo">
                            <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                                    media="(max-width: 37.5em)"/>
                            <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png"/>
                           
                        </picture> */}
        
         
                        
                    </div>
                    <div className="row">
                    <svg id="clouds" alt="Gray Clouds Background" xmlns="http://www.w3.org/2000/svg" width="2611.084" height="10%" viewBox="0 0 2611.084 485.677">
    <path id="Path_39" data-name="Path 39" d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z" transform="translate(142.69 -634.312)" fill="#eee"/>
  </svg>
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                faceboook
                                instagram
                                twitter
                                linkedin
                                {/* <ul className="footer__list">
                                    <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                                    <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                                    <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                                    <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                                    <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            {/* <p className="footer__copyright">
                                Built by <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                                Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                                and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                                Schmedtmann, is of course highly appreciated!
                            </p> */}
                        </div>
                    </div>
                </footer>
                {this.state.showViewPopUp ? <div className="popup">
                            <div className="popup__close"onClick={this.closePopUpHandler}>X</div>
                            <div className="popup__content">
                                <div className="popup__left">
                                    <h2 className="heading-secondary">About</h2>
                                </div>
                                <div className="popup__right">
                                    <img src={dash} className="popup__img popup__img-1" />
                                    <img src={resume} className="popup__img popup__img-2"/>
                                    <img src={offer} className="popup__img popup__img-3"/>
                                </div>
                            </div>
                </div>: null}
            </div>}
            {this.state.loading && <div id="loader">
                <svg x="0px" y="0px" viewBox="0 0 298 53.9">
                <path className="st0" d="M297.5,41.2h-76.6c-0.5,0-0.9,0.4-1,0.8l-1.6,11.3l-3.1-32c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8
                                    l-5.3,25.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6l-2.3,4.8h-107c0,0,0,0,0,0H82c-1.6,0-2.2,1.1-2.2,1.6
                                    l-1.6,11.3l-3.1-52c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8l-9.3,45.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6
                                    l-2.3,4.8H0.5"/>
                </svg>
            </div>}
        </div>
           
          );
    }
  
}

export default App;
