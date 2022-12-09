import React from "react";
import Bg from '../../Asset/Background/BackgroundBlob.svg'
import PcExemple from '../../Asset/PcHero.png'


export default function Hero(){

    function waitButton(){
        setTimeout(function(){
            window.location.replace('https://localhost:3000');
        }, 1000);
    }

    return(
        <div id="Hero" style={{"backgroundImage": `url(${Bg})`}}>
            <div className="heroSide">
                <h1 className="heroTitle">Changer votre idée en réalilte</h1>
                <h4 className="paragraphHero">Exosy peut réaliser vos envie les plus profondes en site web les plus moderne!</h4>
                <button onClick={waitButton} className="JoinHero">Rejoinez-nous</button>
            </div>
            <img src={PcExemple} alt="" className="ImageHero" />
        </div>
    )
}