import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const Faq = ({ faqs, open, setOpen }) => {
    return (
        <section className="cards-container">
            {faqs.map(faq => (
                <article key={faq.id} className="cards">
                    <div className="cards-quest">
                        <h5 className="md:text-[1.2rem] md:leading-normal">
                            {faq.quest}
                        </h5>
                        <div className="icon-container" onClick={() => setOpen(!open)}>
                            {
                                open ?
                                    <AiOutlineMinus /> :
                                    <AiOutlinePlus />
                            }
                        </div>
                    </div>
                    {open &&
                        <p className="md:text-[0.9rem]">
                            {faq.ans}
                        </p>}
                </article>
            ))}
        </section>
    )
}

export default Faq