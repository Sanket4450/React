import { useState, useEffect } from "react"

export function Timer({ initial, increment }) {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + increment)
        }, 1000)

        return () => clearTimeout(timer)
    }, [count])

    if (count <= (initial + 1) * 100) {
        return (
            <h1 style={{ fontFamily: 'sans-serif', marginLeft: 10 }}>The number is {count}</h1>
        )
    }
    return null
}
