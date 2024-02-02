import { Link } from "react-router-dom"

export function ProductNotFound() {
    return (
        <div className="flex flex-col text-center">
            <h1 className="font-mono text-[14vmax] text-slate-900">404</h1>
            <h3 className="font-sans text-3xl mb-5 text-slate-900">Product Not Found</h3>
            <p className="font-sans text-sm px-6 text-slate-900">Oops! The product you are looking for does not exist. It might have been moved or delete.</p>
            <Link to="/products" className="mx-auto rounded-sm text-slate-900 border-t-black border-s-black border-b-red-800 border-e-red-800 mt-14 border-t-2 border-s-2 border-b-8 border-e-8 w-64 text-sm font-bold py-4">BACK TO PRODUCTS PAGE</Link>
        </div>
    )
}
