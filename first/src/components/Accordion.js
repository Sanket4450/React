import { useState } from "react"
import "./Accordion"
import { Panel } from "./Panel"

export function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div style={{ width: '96vw', margin: '2vw auto'}}>
            <Panel
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                title={"Apple (Technology company)"}
                description={"Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics."} />
            <Panel
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                title={"Tesla, Inc. (Automotive company)"}
                description={"Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services."} />
            <Panel
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                title={"Oracle (Computer software company)"}
                description={"Oracle Corporation is an American multinational computer technology company headquartered in Austin, Texas, United States. In 2020, Oracle was the third-largest software company in the world by revenue and market capitalization."} />
        </div>
    )
}
