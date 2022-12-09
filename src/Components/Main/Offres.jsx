import React, {useEffect} from "react";
import DataOffres from "../../Data/DataOffres";

export default function Offres(){

    const dataOffre = DataOffres.map((item) =>
        <OffresContainer key={item.id} {...item} />
    )

    return ( 
        <div id="Offres">
            {dataOffre}
        </div>
    )
}

function OffresContainer(e){

    useEffect(() => {
        document.querySelectorAll('.Offre').forEach( (i) => {
            console.log(i);
            if(i.innerHTML === '<span class="isValid"></span>'){
                i.classList.add('None')
            }
        })

        document.getElementsByClassName('OffreContainer')[1].classList.add('Offre2')
        document.getElementsByClassName('OffreContainer')[2].classList.add('Offre3')
        document.getElementsByClassName('Achat')[1].style.background = 'white'
        document.getElementsByClassName('Achat')[1].style.color = 'black'
        document.getElementsByClassName('Achat')[2].style.background = '#330099'
        document.getElementsByClassName('Achat')[2].style.color = 'white'
    });

    return(
        <div className="OffreContainer">
            <ul className="OffreContent">
                <li className="Offre Title">{e.Title}</li>
                <li className="Offre"><span className='isValid Prix'>{e.Prix}</span></li>
                <li className="Offre"><span className='isValid Abonnement'>{e.Abonnement}</span></li>
                <li className="Offre"><span className='isValid'>{e.Retours}</span></li>
                <li className="Offre"><span className='isValid'>{e.Responcive}</span></li>
                <li className="Offre"><span className='isValid'>{e.Backend}</span></li>
                <li className="Offre"><span className='isValid'>{e.NDM}</span></li>
                <li className="Offre"><span className='isValid'>{e.Framework}</span></li>
                <li className="Offre"><span className='isValid'>{e.Temps}</span></li>

                <button className="Achat">Acheté</button>
            </ul>
        </div>
    )
}