import { Content } from '../components/ui/Content'
import { aboutParagraphs } from '../data/about'

export function About() {
    return (
        <>
            <h1 className="font-sans text-[6vmax] text-center text-slate-800 my-5">
                About Us
            </h1>
            <section className="mx-5">
                {aboutParagraphs.map((paragraph) => (
                    <Content
                        key={paragraph.id}
                        content={paragraph.content}
                    />
                ))}
            </section>
        </>
    )
}
