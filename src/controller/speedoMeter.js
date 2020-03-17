import React from "react";

const speedoMeter = () => {
    const speed = ()=>{
        let i=0;
		let deg = Math.ceil((+document.getElementById('speed').value * 36));
    	const a = setInterval(function(){
			document.getElementById('needle').style.transform = 'rotate('+i+'deg)';
            
            if(i == deg){
				clearInterval(a);
            }
            i++;
		},10)
    }

    const changeHandler = ()=>{

    }

    return (
        <div>
            <div className="wrapper">
                <div className="gauge">
                    <div className="rotate rotate-36"></div>
                    <div className="rotate rotate-72"></div>
                    <div className="rotate rotate-108"></div>
                    <div className="rotate rotate-144"></div>
                    <div className="needle" id="needle"></div>
                    <div className="gauge-center"></div>
                </div>
            </div>
            <input type="text" onChange={changeHandler} style={{margin: "15px 2% 0 34%", height: "30px"}} id="speed" />
            <button onClick={speed}>click me</button>
        </div>

    )
}

export default speedoMeter;