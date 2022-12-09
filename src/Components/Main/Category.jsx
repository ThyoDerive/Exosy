import React from "react";
import Portfolio from '../../Asset/SVG/Portfolio.svg'
import ECommerce from '../../Asset/SVG/E-Commerce.svg'
import Blog from '../../Asset/SVG/BlogCate.svg'
import Personel from '../../Asset/SVG/PersonelWeb.svg'
import Vitrine from '../../Asset/SVG/Vitrine.svg'
import Event from '../../Asset/SVG/Event.svg'

export default function Category(){
    return(
        <div id="Category">
            <a href="/" className="Categories"><img src={Portfolio} alt="" /> Portfolio</a>
            <a href="/" className="Categories"><img src={ECommerce} alt="" /> E-Commerce</a>
            <a href="/" className="Categories"><img src={Blog} alt="" /> Blog</a>
            <a href="/" className="Categories"><img src={Vitrine} alt="" /> Site Vitrine</a>
            <a href="/" className="Categories"><img src={Personel} alt="" /> Projet Personnel</a>
            <a href="/" className="Categories"><img src={Event} alt="" /> Envenement</a>
        </div>
    )
}