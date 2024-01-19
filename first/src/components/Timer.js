import { useState, useEffect } from "react"

export function Timer({ initial, increment }) {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + increment)
        }, 1000)

        return () => clearTimeout(timer)
    }, [count])

    return <h1 style={{ fontFamily: 'sans-serif', marginLeft: 10 }}>The Page is rendered {count} times</h1>
}
