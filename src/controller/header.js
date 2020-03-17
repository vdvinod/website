import React from "react";

const header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Hi, i'm Vinod <div>I design & build</div> </span>
                    <span className="heading-primary--sub">YES, I'AM AVAILABLE FOR HIRE</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">explore</a>
            </div> 
       </header>
    )
}

export default header;