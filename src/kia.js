import React from 'react'
import kiaRio from './images/rio.png'
import forte from './images/forte.png'
import k5 from './images/k5.png'
import stinger from './images/stinger.png'
import sportage from './images/sportage.png'
import seltos from './images/seltos.png'
import sorento from './images/sorento.png'
import niro from './images/niro.png'


function Kia(){
    const body = [
        {id: "1", Name : 'Kia Rio', year: '2021', img:kiaRio},
        {id: "2", Name : 'Kia Forte', year: '2021', img:forte},
        {id: "3", Name : 'Kia K5', year: '2021', img:k5},
        {id: "4", Name : 'Kia Stinger', year: '2021', img:stinger},
        {id: "5", Name : 'Kia Sportage', year: '2021', img:sportage},
        {id: "6", Name : 'Kia Seltos', year: '2022', img:seltos},
        {id: "7", Name : 'Kia Niro', year: '2022', img:niro},
        {id: "8", Name : 'Kia Sorento', year: '2022', img:sorento},
    ]

    const bodyItem = body.map((car) => {
        return(
            <section key={car.id} className="cars routedCars">
                <img src={car.img} className="carImg"alt={car.Name}/>
                <h3>{car.Name}</h3>
                <h4>{car.year}</h4>
            </section>
        )
    })
    return(
        <aside className="carContainer">
            {bodyItem}
        </aside>
    )
}

export default Kia;