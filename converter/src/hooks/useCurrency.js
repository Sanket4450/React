import { useState, useEffect, useMemo } from "react";

export function useCurrency(currency) {
    const [data, useData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(data => data.json())
        .then(data => useData(data))
    }, [currency])

    const memoizedData = useMemo(() => data, [data])

    return [memoizedData]
}
