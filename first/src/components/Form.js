import { useState } from "react";
import "./Form.css"
import { setCursorPointer } from '../utils/pointer'

export function MyForm() {
    const [inputs, setInputs] = useState({
        firstName: "Sanket",
        lastName: "Talaviya",
        age: 17,
        nationality: "Indian"
    })

    const handleFieldChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault() // to prevent browser's default behavior on form submission
        console.log(inputs)
    }

    return (
        <form id="myForm" onSubmit={handleFormSubmit}>
            <label htmlFor="firstName" onMouseEnter={setCursorPointer}>First Name:</label><br />
            <input
                type="text"
                id="firstName"
                className="textField"
                name="firstName"
                value={inputs.firstName || ""}
                onChange={handleFieldChange}
            /><br />
            <label htmlFor="lastName" onMouseEnter={setCursorPointer}>Last Name:</label><br />
            <input
                type="text"
                id="lastName"
                className="textField"
                name="lastName"
                value={inputs.lastName || ""}
                onChange={handleFieldChange}
            /><br />
            <label htmlFor="age" onMouseEnter={setCursorPointer}>First Name:</label><br />
            <input
                type="number"
                id="age"
                className="numberField"
                name="age"
                value={inputs.age}
                onChange={handleFieldChange}
            /><br />
            <input id="submit" type="submit" onMouseEnter={setCursorPointer} />
        </form>
    )
}
