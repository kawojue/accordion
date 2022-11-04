const Faq = ({ faqs, open, setOpen }) => {
    return (
        <section className="cards-container">
            {faqs.map((faq, index) => (
                <article key={index} className="cards">
                    <div class="cards-quest">
                        <h5 className="md:text-[1.2rem] md:leading-normal">
                            {faq.quest}
                        </h5>
                        <div className="icon-container">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <p className="md:text-[0.9rem]">
                        {faq.ans}
                    </p>
                </article>
            ))}
        </section>
    )
}

export default Faq