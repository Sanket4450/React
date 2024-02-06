import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
} from '../redux/slices/counter'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(0)

    function handleDecrement() {
        if (count > 0) {
            dispatch(decrement())
        }
    }

    function handleDecrementByAmount(decValue) {
        if (count - decValue >= 0) {
            dispatch(decrementByAmount(Number(inputValue)))
        }
        else {
            dispatch(decrementByAmount(count))
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <button
                style={{ fontSize: '2vw', padding: '0 1vw' }}
                onClick={() => dispatch(increment())}>
                +
            </button>
            <span style={{ fontSize: '2vw', padding: '0 1vw' }}>{count}</span>
            <button
                style={{ fontSize: '2vw', padding: '0 1vw' }}
                onClick={handleDecrement}>
                -
            </button>
            <h1
                style={{
                    backgroundColor: '#222',
                    color: 'gold',
                    width: 'auto',
                    fontSize: '6vmax',
                    margin: '20px auto',
                    padding: '10px 0',
                    borderRadius: '12px',
                    fontFamily: 'sans-serif',
                }}>
                {count}
            </h1>
            <button
                style={{
                    fontSize: '2vw',
                    padding: '10px 15px',
                    margin: '0 10px',
                }}
                onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
                +
            </button>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                    padding: '5px 0',
                    margin: 'auto',
                    paddingLeft: '5px',
                    fontSize: '2vmax',
                    textAlign: 'center',
                }}
            />
            <button
                style={{
                    fontSize: '2vw',
                    padding: '10px 15px',
                    margin: '0 10px',
                }}
                onClick={() => handleDecrementByAmount(Number(inputValue))}>
                -
            </button>
        </div>
    )
}
