export function Result({ amount, convertedAmount, fromOption, toOption }) {
  return (
    <div className="text-lg sm:text-xl lg:text-2xl flex justify-between">
      <h3 className="w-[45%] overflow-x-scroll h-16 md:h-[72px]">{amount || 0} {fromOption.toUpperCase()}</h3>
      <p className="h-[72px]">=</p>
      <h3 className="w-[45%] overflow-x-scroll h-16 md:h-[72px]">{convertedAmount} {toOption.toUpperCase()}</h3>
    </div>
  )
}
