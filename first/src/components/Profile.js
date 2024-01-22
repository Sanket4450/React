import React, { createContext, useContext, useRef, useState } from 'react'
import './Profile.css'

const ProfileContext = createContext()

export function Profile() {
    const [user] = useState('Sanket Talaviya')
    const profileRef = useRef(null)

    function abc() {
        profileRef.current.style.color = 'yellow' // perform any JS DOM action to the reference element
    }

    return (
        <ProfileContext.Provider value={user}>
            <div className='profile' ref={profileRef}> {/* identify tag using ref */}
                <h1>Profile</h1>
                <h1>{user}</h1>
                <Component1 user={user} />
                <button className='change-text-button' onClick={abc}>Change Text to Yellow</button>
            </div>
        </ProfileContext.Provider>
    )
}

function Component1({ user }) {
    return (
        <div className='component1'>
            <h1>Component1</h1>
            <h1>{user}</h1>
            <Component2 user={user} />
        </div>
    )
}

function Component2() {
    return (
        <div className='component2'>
            <h1>Component2</h1>
            <Component3 />
        </div>
    )
}

function Component3() {
    return (
        <div className='component3'>
            <h1>Component3</h1>
            <Component4 />
        </div>
    )
}

function Component4() {
    const user = useContext(ProfileContext)

    return (
        <div className='component4'>
            <h1>Component4</h1>
            <h1>{user}</h1>
        </div>
    )
}
