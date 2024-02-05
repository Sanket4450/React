import { useState, useEffect } from 'react'
import { Product } from './Product'
import { products } from '../../data/products'
import { chunkArray } from '../../utils/chunkArray'

export function ProductBar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () =>
            setScreenWidth(window.innerWidth)
        )

        return () => {
            window.removeEventListener('resize', () =>
                setScreenWidth(window.innerWidth)
            )
        }
    }, [])

    let chunkProducts = []

    if (screenWidth >= 1080) {
        chunkProducts = chunkArray(products, 5)
    } else if (screenWidth >= 880) {
        chunkProducts = chunkArray(products, 4)
    } else if (screenWidth >= 650) {
        chunkProducts = chunkArray(products, 3)
    } else if (screenWidth >= 450) {
        chunkProducts = chunkArray(products, 2)
    } else {
        chunkProducts = chunkArray(products, 1)
    }

    return (
        <div className="my-12">
            {chunkProducts.map((chunk, chunkIndex) => (
                <div
                    key={chunkIndex}
                    className="flex justify-around mt-8">
                    {chunk.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            stars={product.stars}
                            sold={product.sold}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
