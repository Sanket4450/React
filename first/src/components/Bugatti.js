import { cars } from '../data/cars'

import React from 'react'

function Bugatti({ imgURL, color, price = 23 }) {
    return (
        <div>
            <img src={imgURL} alt='Bugatti' style={{ width: '20vw', height: '14vw', borderRadius: 2 }} />
            <h2 style={{textAlign: 'center', fontSize: '2.5vw', fontFamily: 'sans-serif'}}>{color}</h2>
            <h2 style={{textAlign: 'center', fontSize: '2vw', fontFamily: 'monospace'}}>{price}Cr</h2>
            <p style={{textAlign: 'center', fontSize: '1.5vw'}}>{price >= 35 && '(costly)'}</p>
        </div>
    )
}

export default function BugattiCars() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f5f5f5', padding: '40px 0' }}>
            {
                cars.map(car => <Bugatti imgURL={car.image} color={car.color} price={car.price} />)
            }
        </div>
    )
}
