import { cars } from '../data/cars'
import React, { useState } from 'react'

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
    const bugattiCars = cars.map(car => <Bugatti key={car.id} imgURL={car.image} color={car.color} price={car.price} />)

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f5f5f5', padding: '40px 0' }}>
            {bugattiCars}
        </div>
    )
}

const showButtonStyles = {
    backgroundColor: '#444950',
    color: 'white',
    width: '25vw',
    borderRadius: 25,
    fontSize: '2vw',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: '20px auto',
    padding: '8px 0'
}

export function LaVoitureNoire() {
    const [show, setShow] = useState(false)
    const [, setIsHovered] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    function handleMouseHover(isHovered) {
        setIsHovered(isHovered)
    }

    return (
        <>
            <div id='show' onClick={handleShow} style={showButtonStyles}
                onMouseEnter={() => {
                    handleMouseHover(true)
                    document.getElementById('show').style.backgroundColor = '#212224'
                    document.getElementById('show').style.cursor = 'pointer'
                }}
                onMouseLeave={() => {
                    handleMouseHover(false)
                    document.getElementById('show').style.backgroundColor = '#444950'
                }
                }>{show ? 'Hide' : 'Show'} La Voiture Noire</div>
            {show && <img src='https://di-uploads-pod20.dealerinspire.com/browardbugatti/uploads/2019/12/Bugatti-La-Voiture-Noire-34-View.jpg' alt='Bugatti La Voiture Noire' style={{ width: '100vw', borderRadius: 10 }} />}
        </>
    )
}
