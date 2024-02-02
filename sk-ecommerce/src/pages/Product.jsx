import { useParams } from 'react-router-dom'
import { FullProduct } from '../components/products'

export function Product() {
    const { id } = useParams()

    return (
        <div>
            <FullProduct id={id} />
        </div>
    )
}
