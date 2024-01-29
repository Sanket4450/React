export function Amount({amount, setTextAmount}) {
    return (
        <div className="text-lg h-20 flex flex-col justify-between">
            <p className="text-lg sm:text-xl lg:text-2xl">Enter Amount</p>
            <input type="text" value={amount} onChange={(e) => setTextAmount(e.target.value)} className="text-slate-800 px-3 py-1.5 rounded-sm w-full"/>
        </div>
    )
}
