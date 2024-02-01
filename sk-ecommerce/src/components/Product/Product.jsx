export function Product({ name, price, image }) {
    return (
        <div className='w-[200px] hover:cursor-pointer bg-red-700'>
            <img src={image} className="rounded-2xl" />
            <h3 className="text-slate-800 font-sans text-lg font-semibold my-0.5">{name}</h3>
            <p className="text-slate-800 font-sans text-xl font-semibold my-0.5">₹{price}</p>
        </div>
    )
}
