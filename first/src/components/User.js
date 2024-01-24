import { useState } from "react";
import { users } from "../data/users";
import "./User.css"
import { setCursorPointer } from '../utils/pointer'

export function User() {
    const [user, setUser] = useState(users[0])

    const incrementAge = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    const decrementAge = () => {
        setUser({
            ...user,
            age: user.age - 1
        })
    }

    return (
        <div className="user">
            <p style={{ fontSize: '2.5vw', margin: '10px 0' }}>{user.firstName} {user.lastName}</p>
            <button style={{ fontSize: '2vw', margin: '10px', display: 'inline-block' }} onClick={decrementAge}
                onMouseEnter={(event) => { setCursorPointer(event) }}>-</button>
            <p style={{ fontSize: '2vw', margin: '10px 0', display: 'inline-block' }}>Age: {user.age}</p>
            <button style={{ fontSize: '2vw', margin: '10px', display: 'inline-block' }} onClick={incrementAge}
                onMouseEnter={(event) => { setCursorPointer(event) }}>+</button>
            <p style={{ fontSize: '2vw', margin: '10px 0' }}>IPL Team: {user.team}</p>
            <p style={{ fontSize: '2vw', margin: '10px 0' }}>Jersey No.: {user.jersey}</p>
        </div>
    )
}
