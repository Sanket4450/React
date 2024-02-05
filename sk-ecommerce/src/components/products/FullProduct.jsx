import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProductNotFound } from './ProductNotFound'
import { products } from '../../data/products'
import warningPNG from '../../assets/png/default_image.png'

export function FullProduct({ id }) {
    const [loading, setLoading] = useState(true)
    const [imageError, setImageError] = useState(false)

    const product = products.find((product) => product.id === Number(id))

    if (!product) return <ProductNotFound />

    return (
        <div>
            {loading && (
                <div className="w-full h-screen flex justify-center items-center">
                    <CircularProgress
                        size={50}
                        color="inherit"
                        thickness={6}
                    />
                </div>
            )}
            <div
                style={{ height: 'calc(100vh - 56px)' }}
                className="flex max-md:flex-col md:flex-row items-center">
                <img
                    src={product.fullImage}
                    className={`${imageError && 'hidden'} h-[90%] md:ml-8`}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                        setLoading(false), setImageError(true)
                    }}
                    alt={product.name}
                />
                <div>
                    <h3 className="text-slate-800 font-sans text-lg font-semibold">
                        {name}
                    </h3>
                    <div className="w-[120px] h-6 flex justify-between items-center">
                        <FontAwesomeIcon
                            icon={faStarHalfStroke}
                            className="text-slate-800"
                        />
                        <p className="text-slate-800 text-sm">{stars}</p>
                        <p className="text-slate-800 font-light">|</p>
                        <p className="rounded-md bg-[#eaebef] text-slate-800 text-[12px] px-2 py-0.5">
                            {sold}
                        </p>
                    </div>
                    <p className="text-slate-800 font-sans text-xl font-semibold">
                        ₹{price}
                    </p>
                </div>
            </div>
        </div>
    )
}
