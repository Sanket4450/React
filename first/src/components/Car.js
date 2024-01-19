import BugattiCars from './Bugatti'
import { LaVoitureNoire } from './Bugatti'

export default function Car() {
    return (
        <section>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '3vw', backgroundColor: '#272822', color: 'white', padding: '15px 0', margin: '0' }}>Welcome to SK Cars</h1>
            <BugattiCars />
            <LaVoitureNoire />
        </section>
    )
}
