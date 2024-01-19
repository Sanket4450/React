import Car from './components/Car'
import { Timer } from './components/Timer'
import { User } from './components/User'

export default function App() {
    return (
        <>
            <Car />
            <Timer initial={0} increment={1} />
            <Timer initial={0} increment={10} />
            <Timer initial={1000} increment={5} />
            <User />
        </>
    )
}
