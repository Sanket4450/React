import BugattiCars from './Bugatti'
import { LaVoitureNoire } from './Bugatti'

export default function Car() {
    return (
        <section>
            <h1 style={{ textAlign: 'center' }}>Welcome to SK Cars</h1>
            <BugattiCars />
            <LaVoitureNoire />
        </section>
    )
}
