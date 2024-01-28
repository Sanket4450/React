import { useEffect, useState } from "react"
import Amount from "./Amount"

export function Card() {
    const [amount, setAmount] = useState(null)

    function setTextAmount(value) {
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', undefined]
        console.log(value[value.length - 1], numbers.includes(value[value.length - 1]))
        if (numbers.includes(value[value.length - 1])) {
            console.log('executed')
            setAmount(value)
        }
    }

    return (
        <div className="w-[88vw] md:w-[600px] mx-auto px-[6%] py-[10%] bg-purple-500 rounded-lg font-sans text-slate-800">
            <h1 className=" text-3xl text-center text-white font-semibold">Currency Converter</h1>
            <Amount amount={amount} setTextAmount={setTextAmount}/>
        </div>
    )
}
