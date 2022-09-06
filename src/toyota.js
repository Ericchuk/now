import React from 'react'
import camry from './images/camry.webp'
import corolla from './images/corolla.webp'
import prius from './images/prius.webp'
import venza from './images/venza.webp'
import rav4 from './images/rav4.webp'
import sienna from './images/sienna.webp'
import highlander from './images/highlander.webp'
import runner from './images/4runner.webp'


function Toyota(){
    const body = [
        {id: "1", Name : 'Toyota Camry', year: '2021', img:camry},
        {id: "2", Name : 'Toyota Corolla', year: '2021', img:corolla},
        {id: "3", Name : 'Toyota Prius', year: '2021', img:prius},
        {id: "4", Name : 'Toyota Venza', year: '2021', img:venza},
        {id: "5", Name : 'Toyota Rav4', year: '2021', img:rav4},
        {id: "6", Name : 'Toyota Sienna', year: '2022', img:sienna},
        {id: "7", Name : 'Toyota Highlander', year: '2022', img:highlander},
        {id: "8", Name : 'Toyota 4runner', year: '2022', img:runner},
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

export default Toyota;