import { useState } from "react"
import { CircularProgress } from '@mui/material'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductNotFound } from "./ProductNotFound"
import { products } from "../../data/products"
import warningPNG from '../../assets/png/default_image.png'

export function FullProduct({ id }) {
    const [loading, setLoading] = useState(true)
    const [imageError, setImageError] = useState(false)

    const product = products.find(product => product.id === Number(id))

    if (!product) return <ProductNotFound />

    return (
        <div className="max-md:hidden">
            {
                loading && (
                    <div className="w-[200px] h-[260px] flex justify-center items-center">
                        <CircularProgress color="inherit" thickness={8} />
                    </div>
                )
            }
        </div>
    )
}
