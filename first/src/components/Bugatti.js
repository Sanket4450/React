import { cars } from '../data/cars'

import React from 'react'

function Bugatti({ imgURL }) {
    return (
        <img src={imgURL} alt='Bugatti' style={{ width: '20vw', borderRadius: 2 }} />
    )
}

export default function BugattiCars() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f5f5f5', padding: '40px 0' }}>
            {
                cars.map(car => <Bugatti imgURL={car.image} />)
            }
        </div>
    )
}
