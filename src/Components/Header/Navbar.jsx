import React from "react";
import NewUser from '../../Asset/SVG/NewUser.svg'
import Personalise from '../../Asset/SVG/Personalise.svg'
import Template from '../../Asset/SVG/Template.svg'
import Blog from '../../Asset/SVG/Blog.svg'

export default function Navbar(){

    function waitButton(){
        setTimeout(function(){
            window.location.replace('https://localhost:3000');
        }, 1000);
    }

    return(
        <div id="Navbar">
            <h1>Exosy</h1>
            <ul className="OngletContainer">
                <a href="/" className="Onglet"><img src={Template} alt="" /> Templates</a>
                <a href="/" className="Onglet"><img src={Personalise} alt="" /> Site personnalisé</a>
                <a href="/" className="Onglet"><img src={Blog} alt="" /> Blog</a>
            </ul>
            <button onClick={waitButton} className="JoinNavbar">Nous Rejoindre <img style={{"marginLeft": "10px"}} src={NewUser} alt="" /></button>
        </div>
    )
}

