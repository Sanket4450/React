import { useState } from 'react'
import { Box } from './Box'
import './Board.css'

export const Board: React.FC = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [values, setValues] = useState<Array<string | null>>(Array(9).fill(null))

    function handleClick(i: number) {
        if (values[i] || calculateWinner(values)) return

        const nextSquares = values.slice()

        if (xIsNext) {
            nextSquares[i] = 'X'
        }
        else {
            nextSquares[i] = 'O'
        }

        setValues(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(values)
    const draw = checkDraw(values)

    let status = winner ? `Winner: ${winner}` : draw ? 'Match Draw' : `Next player: ${(xIsNext ? 'X' : 'O')}`

    return (
        <>
            <h3 className='status'>{status}</h3>
            <div className='board'>
                <Box value={values[0]} onBoxClick={() => handleClick(0)} />
                <Box value={values[1]} onBoxClick={() => handleClick(1)} />
                <Box value={values[2]} onBoxClick={() => handleClick(2)} />
                <Box value={values[3]} onBoxClick={() => handleClick(3)} />
                <Box value={values[4]} onBoxClick={() => handleClick(4)} />
                <Box value={values[5]} onBoxClick={() => handleClick(5)} />
                <Box value={values[6]} onBoxClick={() => handleClick(6)} />
                <Box value={values[7]} onBoxClick={() => handleClick(7)} />
                <Box value={values[8]} onBoxClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function calculateWinner(values: Array<string | null>) {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < conditions.length; i++) {
        const [a, b, c] = conditions[i]

        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
            return values[a]
        }
    }

    return null
}

function checkDraw(values: Array<string | null>): boolean {
    for (let value of values) {
        if (value === null) return false
    }
    return true
}
