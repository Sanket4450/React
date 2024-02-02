import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <div className="flex flex-col text-center">
            <h1 className="font-mono text-[14vmax] text-[#F33A6A]">404</h1>
            <h3 className="font-sans text-3xl mb-5">Page Not Found</h3>
            <p className="font-sans text-sm px-6">Oops! The page you are looking for does not exist. It might have been moved or delete.</p>
            <Link to="/" className="mx-auto rounded-sm border-t-black border-s-black border-b-red-800 border-e-red-800 mt-14 border-t-2 border-s-2 border-b-8 border-e-8 w-52 text-sm font-bold py-4">BACK TO HOME</Link>
        </div>
    )
}
