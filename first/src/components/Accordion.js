import { useState } from "react"
import "./Accordion"
import { Panel } from "./Panel"

export function Accordion() {
    const [activeIndeces, setActiveIndeces] = useState([1, 0, 0])

    return (
        <div style={{ width: '96vw', margin: '2vw auto'}}>
            <Panel
                isActive={activeIndeces[0] === 1}
                onShow={() => setActiveIndeces([1, 0, 0])}
                title={"Apple (Technology company)"}
                description={"Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics."} />
            <Panel
                isActive={activeIndeces[1] === 1}
                onShow={() => setActiveIndeces([0, 1, 0])}
                title={"Tesla, Inc. (Automotive company)"}
                description={"Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services."} />
            <Panel
                isActive={activeIndeces[2] === 1}
                onShow={() => setActiveIndeces([0, 0, 1])}
                title={"Oracle (Computer software company)"}
                description={"Oracle Corporation is an American multinational computer technology company headquartered in Austin, Texas, United States. In 2020, Oracle was the third-largest software company in the world by revenue and market capitalization."} />
        </div>
    )
}
