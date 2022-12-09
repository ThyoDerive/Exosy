import React from "react";
import Hero from "../Components/Header/Hero";
import Navbar from "../Components/Header/Navbar";
import Category from "../Components/Main/Category";
import Offres from "../Components/Main/Offres";

export default function Homepage(){
    return(
        <div id="Homepage">
            <Navbar />
            <Hero />
            <Category />
            <Offres />
        </div>
    )
}