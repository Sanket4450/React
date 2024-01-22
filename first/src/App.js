import Car from './components/Car'
import { Timer } from './components/Timer'
import { User } from './components/User'
import { MyForm } from './components/Form'
import { Accordion } from './components/Accordion'
import { Profile } from './components/Profile'
import { Todos } from './components/Todo'

export default function App() {
    return (
        <>
            <Car />
            <Timer initial={0} increment={1} />
            <Timer initial={0} increment={10} />
            <Timer initial={1000} increment={5} />
            <User />
            <MyForm />
            <Accordion />
            <Profile />
            <Todos />
        </>
    )
}
