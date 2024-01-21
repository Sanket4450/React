import { useState } from 'react'
import './Box.css'

interface BoxProps {
    value: string | null
    onBoxClick: () => any
}

export const Box: React.FC<BoxProps> = ({ value, onBoxClick }) => {
    return (
        <div className='box' onClick={onBoxClick}>{value}</div>
    )
}
