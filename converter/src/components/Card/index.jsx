import { useState, useEffect } from "react"
import { useCurrency } from '../../hooks/useCurrency'
import { Amount } from "./Amount"
import { Converter } from "./Converter"
import { Result } from "./Result"

export function Card() {
    const [amount, setAmount] = useState('')
    const [fromOption, setFromOption] = useState('usd')
    const [toOption, setToOption] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [data] = useCurrency(fromOption)
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    const setTextAmount = (value) => {
        const regex = /^[0-9]*(\.[0-9]*)?$/

        if (regex.test(value)) {
            setAmount(value)
        }
    }

    const switchOptions = () => {
        setFromOption(toOption)
        setToOption(fromOption)
        setIsDataLoaded(false)
    }

    useEffect(() => {
        if (Object.keys(data[fromOption] || {}).length > 0) {
            setConvertedAmount((Number(amount) * data[fromOption][toOption]).toFixed(2))
        }
    }, [amount])

    useEffect(() => {
        if (!isDataLoaded && Object.keys(data[fromOption] || {}).length > 0) {
            setConvertedAmount((Number(amount) * data[fromOption][toOption]).toFixed(2))
            setIsDataLoaded(true)
        }
    }, [fromOption, toOption, data])

    return (
        <div className="w-[88vw] sm:w-[85vw] md:w-[700px] h-[450px] md:h-[500px] mx-auto mt-[6vw] md:mt-12 px-[6%] md:px-12 py-[8%] md:py-16 bg-[#6B52FC] rounded-lg font-sans text-white flex flex-col justify-between">
            <h1 className=" text-xl sm:text-2xl md:text-3xl text-center font-semibold">Currency Converter</h1>
            <Amount amount={amount} setTextAmount={setTextAmount}/>
            {Object.keys(data[fromOption] || {}).length > 0 && (
                <Converter options={Object.keys(data[fromOption])} fromOption={fromOption} toOption={toOption} setFromOption={setFromOption} setToOption={setToOption} switchOptions={switchOptions} />
            )}
            <Result amount={amount} convertedAmount={convertedAmount} fromOption={fromOption} toOption={toOption} />
        </div>
    )
}
