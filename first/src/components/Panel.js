import "./Panel.css"
import { setCursorPointer } from "../utils/pointer";

export function Panel({ title, description, isActive, onShow }) {
    return (
        <section className="panel">
            <h3 className="panel-title">{title}</h3>
            {isActive ?
                <p className="panel-description">{description}</p> :
                <button className="show-button" onMouseEnter={setCursorPointer} onClick={onShow}>Show</button>}
        </section>
    )
}
