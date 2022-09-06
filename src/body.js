import React from 'react'
import toyota from './images/toyota.webp'
import honda from './images/honda.jpg'
import kia from './images/kia.png'
import benz from './images/benz.jpg'
import nord from './images/toyota.webp'

function Body(){
    const body = [
        {id: "1", Name : 'Toyota', year: '2021', img:toyota},
        {id: "2", Name : 'Honda', year: '2021', img:honda},
        {id: "3", Name : 'Kia', year: '2021', img:kia},
        {id: "4", Name : 'Benz', year: '2021', img:benz},
        {id: "5", Name : 'Nord', year: '2021', img:nord},
        {id: "6", Name : 'Toyota', year: '2022', img:toyota},
        {id: "7", Name : 'Honda', year: '2022', img:honda},
        {id: "8", Name : 'Kia', year: '2022', img:kia},
        {id: "9", Name : 'Benz', year: '2022', img:benz},
        {id: "10", Name : 'Nord', year: '2022', img:nord},
    ]

    const bodyItem = body.map((car) => {
        return(
            <section key={car.id} className="cars">
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

export default Body;