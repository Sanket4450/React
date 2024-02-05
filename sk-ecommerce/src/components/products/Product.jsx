import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import warningPNG from '../../assets/png/default_image.png'

export function Product({ id, name, price, image, stars, sold }) {
    const [loading, setLoading] = useState(true)
    const [imageError, setImageError] = useState(false)
    const navigate = useNavigate()

    return (
        <div
            className="w-[200px] hover:cursor-pointer"
            onClick={() => navigate(`/products/${id}`)}>
            {loading && (
                <div className="w-[200px] h-[260px] flex justify-center items-center">
                    <CircularProgress
                        color="inherit"
                        thickness={8}
                    />
                </div>
            )}
            <div
                className={`${loading && 'hidden'} w-[200px] h-[290px] flex flex-col justify-between`}>
                {imageError && (
                    <div className="w-[200px] h-[200px] rounded-2xl flex justify-center items-center bg-[#eaebef]">
                        <img
                            src={warningPNG}
                            className="w-24 h-24"
                        />
                    </div>
                )}
                <img
                    src={image}
                    className={`rounded-2xl ${imageError && 'hidden'}`}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                        setLoading(false), setImageError(true)
                    }}
                    alt={name}
                />
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
    )
}
