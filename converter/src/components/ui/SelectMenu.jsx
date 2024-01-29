export function SelectMenu({ options, option, selectOption }) {
    return (
        <select value={option} onChange={(e) => selectOption(e.target.value)} className=" w-[30vw] md:w-[250px] rounded-md p-2 text-slate-800 hover:cursor-pointer">
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}
