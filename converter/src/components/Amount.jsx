function Amount({amount, setTextAmount}) {
    return (
        <div className="text-lg">
            <p className="text-white">Enter Amount</p>
            <input type="text" value={amount} onChange={(e) => setTextAmount(e.target.value)} className=" px-3 py-1.5 rounded-sm"/>
        </div>
    )
}

export default Amount
