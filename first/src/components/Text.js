import React, { useEffect, useState, memo, useCallback } from 'react'
import './Text.css'

export function Text() {
    const [text, setText] = useState('')
    const [bgColor, setBgColor] = useState('white')
    const [color, setColor] = useState('black')
    const [isChecked, setIsChecked] = useState(false)

    function handleFieldChange(event) {
        const value = event.target.value
        setText(value)
    }

    const handleToggle = useCallback(() => {
        setIsChecked(isChecked => !isChecked)
    }, [isChecked])

    return (
        <div className='apple' style={isChecked ? { backgroundColor: '#323232' } : { backgroundColor: '#D7D7D7' }}>
            <TextField text={text} backgroundColor={bgColor} color={color} />
            <div className='button-set'>
                <button className='color-button' onClick={() => setBgColor('white')} style={{ backgroundColor: 'white', color: 'black', borderRadius: '30px 0 0 30px' }}>White</button>
                <button className='color-button' onClick={() => setBgColor('red')} style={{ backgroundColor: 'red' }}>Red</button>
                <button className='color-button' onClick={() => setBgColor('green')} style={{ backgroundColor: 'green' }}>Green</button>
                <button className='color-button' onClick={() => setBgColor('blue')} style={{ backgroundColor: 'blue' }}>Blue</button>
                <button className='color-button' onClick={() => setBgColor('yellow')} style={{ backgroundColor: 'yellow', color: 'black' }}>Yellow</button>
                <button className='color-button' onClick={() => setBgColor('black')} style={{ backgroundColor: 'black', borderRadius: '0 30px 30px 0' }}>Black</button>
            </div>
            <div className='button-set'>
                <button className='color-button' onClick={() => setColor('white')} style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px 0 0 30px' }}>White</button>
                <button className='color-button' onClick={() => setColor('red')} style={{ backgroundColor: 'white', color: 'red' }}>Red</button>
                <button className='color-button' onClick={() => setColor('green')} style={{ backgroundColor: 'white', color: 'green', }}>Green</button>
                <button className='color-button' onClick={() => setColor('blue')} style={{ backgroundColor: 'white', color: 'blue', }}>Blue</button>
                <button className='color-button' onClick={() => setColor('yellow')} style={{ backgroundColor: 'black', color: 'yellow' }}>Yellow</button>
                <button className='color-button' onClick={() => setColor('black')} style={{ backgroundColor: 'white', color: 'black', borderRadius: '0 30px 30px 0' }}>Black</button>
            </div>
            <input type='text' id='text-field' value={text} placeholder='Text' onChange={handleFieldChange} />
            <ToggleSwitch isChecked={isChecked} handleToggle={handleToggle} />
        </div>
    )
}

const TextField = memo(({ text, backgroundColor, color }) => { 
    useEffect(() => {
        console.log('TextField component updated')
    })

    return (
        <div className='text-field' style={{ backgroundColor, color }}>{text}</div>
    )
})

const ToggleSwitch = memo(({ isChecked, handleToggle }) => {
    useEffect(() => {
        console.log('ToggleSwitch component updated')
    })

    return (
        <label class="switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span class="slider round"></span>
        </label>
    )
})
